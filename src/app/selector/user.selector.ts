import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IUser } from '../models/user.model';

export interface UserState {
  users: IUser[];
}

export interface AppState {
  userState: UserState;
}

export const selectUserState = (state: AppState) => state.userState;

export const SelectUsers = createSelector(
  selectUserState,
  (state: UserState) => state.users
);

// export const listOfUsers = createFeatureSelector<IUser[]>('user');
