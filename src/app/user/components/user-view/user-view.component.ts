import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular/router';
import { takePicture, requestPermissions } from 'nativescript-camera';
import { Store, select } from '@ngrx/store';
import { GET_EDITED_USER } from '../../store/selector/user.selector';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserModel } from '~/app/shared/models/user.model';
import { UpdateUserPicture } from '../../store/action/user.action';

@Component({
  selector: 'ns-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit, OnDestroy {


  userData: UserModel;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private routerExtensions: RouterExtensions,
    private _store: Store<any>,
  ) { }

  ngOnInit() {
    this._store.pipe(
      select(GET_EDITED_USER),
      takeUntil(this.destroy$)
    ).subscribe((user) => {
      this.userData = user;
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  back() {
    this.routerExtensions.backToPreviousPage();
  }
  
  async takePicture() {
    await requestPermissions();
    const newPicture = await takePicture();
    this._store.dispatch(new UpdateUserPicture(`file://${newPicture.android}`));
  }

}
