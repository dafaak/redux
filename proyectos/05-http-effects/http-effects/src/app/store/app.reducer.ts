import {ActionReducerMap, createReducer, on} from '@ngrx/store';
import * as reducers from './reducers';

export interface AppState {
usuarios:reducers.usuariosState
}

export const appReducers :ActionReducerMap<AppState>={
  usuarios:reducers.usuariosReducer,
}
