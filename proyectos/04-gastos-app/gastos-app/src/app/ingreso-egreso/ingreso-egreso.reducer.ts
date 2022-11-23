import {createReducer, on} from '@ngrx/store';
import {setIngresoEgreso, unsetIngresoEgreso} from './ingreso-egreso.actions';
import {IngresoEgresoModel} from "../models/ingreso-egreso.model";

export interface State {
  items: IngresoEgresoModel[];
}

export const initialState: State = {
  items: []
};

export const ingresoEgresoReducer = createReducer(
  initialState,
  on(setIngresoEgreso,
    (state, {items}) => ({...state, items: [...items]})
  ),
  on(unsetIngresoEgreso, (state) => ({...state, items: []}))
)
