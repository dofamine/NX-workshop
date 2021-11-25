import {
  ActionReducer,
  ActionReducerMap, createAction,
  createFeatureSelector, createReducer,
  createSelector,
  MetaReducer, on
} from '@ngrx/store';
import { environment } from '../../environments/environment';

export const userFeatureKey = 'user';

export interface UserState {
}

export interface State {
  [userFeatureKey]: UserState;
}

export const reducers: ActionReducerMap<State> = {
  [userFeatureKey]: createReducer({}, on(createAction('das'), (state) => ({...state})))
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
