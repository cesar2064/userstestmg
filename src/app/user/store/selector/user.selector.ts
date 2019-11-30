import { MemoizedSelector, createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from '../state/user-state';
import { APP_CONSTANTS } from '~/app/app.constants';

export const USER_STORE_SELECTOR: MemoizedSelector<object, UserState> = createFeatureSelector<UserState>(APP_CONSTANTS.stores.userStore);

export const GET_USERS_LIST = createSelector(
    USER_STORE_SELECTOR,
    (state) => state.userList
);

export const GET_EDITED_USER = createSelector(
    USER_STORE_SELECTOR,
    (state) => state.editedUser
);