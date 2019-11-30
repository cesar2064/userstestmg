import { Action } from "@ngrx/store";
import { UserListResponseModel, UserModel } from "~/app/shared/models/user.model";

export enum EUserActions {
    LoadUsersList = '[UserActions] Load Users List',
    LoadUsersListSuccess = '[UserActions] Load Users List Success',
    SetEditedUser = '[UserActions] Set Edited User',
    UpdateUserPicture = '[UserActions] Update User Picture'
}

export class LoadUsersList implements Action {
    public readonly type = EUserActions.LoadUsersList;
    constructor() { }
}

export class LoadUsersListSuccess implements Action {
    public readonly type = EUserActions.LoadUsersListSuccess;
    constructor(public payload: UserListResponseModel) { }
}

export class SetEditedUser implements Action {
    public readonly type = EUserActions.SetEditedUser;
    constructor(public payload: { index: number, user: UserModel }) { }
}

export class UpdateUserPicture implements Action {
    public readonly type = EUserActions.UpdateUserPicture;
    constructor(public payload: string) { }
}

export type UserActions =
    LoadUsersList |
    LoadUsersListSuccess |
    SetEditedUser |
    UpdateUserPicture;