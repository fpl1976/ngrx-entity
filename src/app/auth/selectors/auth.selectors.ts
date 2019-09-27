import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthState } from '../reducers';

export const getAuthState = createFeatureSelector<AuthState>('auth');

export const isLoggedIn = createSelector(
  getAuthState,
  (auth => !!auth.user)
);

export const isLoggedOut = createSelector(
  isLoggedIn,
  loggedIn => !loggedIn
);
