import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, Observable, timer } from 'rxjs';
import { GET_USERS_LIST } from '../../store/selector/user.selector';
import { UserModel } from '~/app/shared/models/user.model';
import { LoadUsersList, SetEditedUser } from '../../store/action/user.action';
import { RouterExtensions } from '@nativescript/angular/router';
import { ListView } from 'tns-core-modules/ui/list-view/list-view';
import { takeUntil, delay, tap } from 'rxjs/operators';

@Component({
  selector: 'ns-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {
  private destroy$: Subject<boolean> = new Subject<boolean>();
  private listView: ListView;
  userList: UserModel[] = [];

  constructor(
    private _store: Store<any>,
    private routerExtensions: RouterExtensions
  ) { }

  ngOnInit() {
    this.loadUsers();
    this._store.select(GET_USERS_LIST).pipe(takeUntil(this.destroy$)).subscribe((users) => {
      this.userList = users;
      timer().pipe(
        tap(() => {
          this.listView && this.listView.refresh();
        }),
        delay(50),
      ).subscribe((users) => {
        this.listView && this.listView.scrollToIndex(this.listView.items.length - 1);
      })
    })
  }
  listViewLoaded(args): void {
    this.listView = args.object;
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  loadUsers() {
    this._store.dispatch(new LoadUsersList());
  }

  loadUserView(user: UserModel, index: number) {
    this._store.dispatch(new SetEditedUser({ user, index }));
    this.routerExtensions.navigate(['/users/view'], { transition: { name: 'slide' } })
  }

}
