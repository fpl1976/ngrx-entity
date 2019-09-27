import { createAction, props } from '@ngrx/store';
import { User } from '../model/user.model';

export const login = createAction(
  '[Auth] User Login',
  props<{ user: User }>()
);

export const logout = createAction(
  '[Auth] User Logout'
);
