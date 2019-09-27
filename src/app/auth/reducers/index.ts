import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';

import { User } from '../model/user.model';

export interface AuthState {
  user: User;
}

export const initialAuthState: AuthState = {
  user: undefined
};

// export const reducers: ActionReducerMap<AuthState> = {

// };


export const metaReducers: MetaReducer<AuthState>[] = !environment.production ? [] : [];
