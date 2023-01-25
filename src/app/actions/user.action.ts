import { createAction, props } from '@ngrx/store';
import { IUser } from '../models/user.model';

export const ADD_USER = '[User] Add';
export const REMOVE_USER = '[User] Remove';

export const AddUser = createAction(ADD_USER, props<{ payLoad: IUser }>());
export const RemoveUser = createAction(REMOVE_USER, props<{ index: number }>());
