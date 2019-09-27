import { initialAuthState } from '.';
import { createReducer, on } from '@ngrx/store';
import { AuthActions } from '../actions';

export const reducer = createReducer(
  initialAuthState,

  on(AuthActions.login, (state, { user }) => ({
    ...state,
    user
  })),

  on(AuthActions.logout, (state) => ({
    ...state,
    user: undefined
  }))

);
