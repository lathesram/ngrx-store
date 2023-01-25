import { createReducer, on } from '@ngrx/store';
import * as userActions from '../actions/user.action';
import { IUser } from '../models/user.model';

const initialUser: IUser = {
  name: 'lathes',
  email: 'lathesparan@gmail.com',
};

export const userReducer = createReducer(
  initialUser,
  on(userActions.AddUser, (state, { payLoad }) => {
    return { ...state, payLoad };
  })
);
