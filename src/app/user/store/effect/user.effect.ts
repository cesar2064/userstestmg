import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Actions, ofType, Effect } from "@ngrx/effects";
import { concatMap, withLatestFrom, map } from 'rxjs/operators';

import { EUserActions, LoadUsersList, LoadUsersListSuccess } from "../action/user.action";
import { UserService } from "~/app/shared/services/user.service";
import { USER_STORE_SELECTOR } from "../selector/user.selector";
import { Store, Action } from "@ngrx/store";

@Injectable()
export class UserEffect {

    constructor(
        private _actions$: Actions,
        private _userService: UserService,
        private _store: Store<any>
    ) { }

    @Effect()
    loadUsersList$: Observable<Action> = this._actions$.pipe(
        ofType<LoadUsersList>(EUserActions.LoadUsersList),
        withLatestFrom(this._store.select(USER_STORE_SELECTOR)),
        concatMap(([action, state]) =>  this._userService.list(state.userListPage + 1)),
        map((response) => new LoadUsersListSuccess(response))
    )


}