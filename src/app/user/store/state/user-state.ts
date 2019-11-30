import { UserModel } from "~/app/shared/models/user.model";

export interface UserState {
    loading: boolean;
    userList: UserModel[];
    userListPage: number;
    editedUserIndex: number;
    editedUser: UserModel;
}

export const INITIAL_USER_STATE: UserState = {
    loading: false,
    userList: [],
    userListPage: 0,
    editedUserIndex: null,
    editedUser: null
}