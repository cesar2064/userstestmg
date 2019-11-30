import { UserActions, EUserActions } from "../action/user.action";
import { INITIAL_USER_STATE, UserState } from '../state/user-state';
import { UserModel, UserPicture } from "~/app/shared/models/user.model";

export function userReducer(state = INITIAL_USER_STATE, action: UserActions): UserState {
    switch (action.type) {

        case EUserActions.LoadUsersList: {
            return {
                ...state,
                loading: true
            }
        }

        case EUserActions.LoadUsersListSuccess: {
            return {
                ...state,
                userList: [...state.userList, ...action.payload.results],
                userListPage: action.payload.info.page,
                loading: false
            }
        }

        case EUserActions.SetEditedUser: {
            return {
                ...state,
                editedUser: {
                    ...action.payload.user
                },
                editedUserIndex: action.payload.index
            }
        }

        case EUserActions.UpdateUserPicture: {
            const picture: UserPicture = {
                ...state.editedUser.picture,
                large: action.payload
            }
            const editedUser: UserModel = {
                ...state.editedUser,
                picture
            }

            const newUserList = [
                ...state.userList
            ]
            newUserList[state.editedUserIndex] = editedUser
            return {
                ...state,
                editedUser,
                userList: newUserList
            }
        }

        default:
            return state;
    }
}