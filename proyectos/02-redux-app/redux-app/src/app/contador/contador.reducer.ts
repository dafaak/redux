import {createReducer, on} from "@ngrx/store";
import {decrementar, dividir, incrementar, multiplicar, reset} from "./contador.actions";

export const initialState = 0;

export const contadorReducer = createReducer(
  initialState,
  on(incrementar, (state) => state + 1),
  on(decrementar, (state) => state - 1),
  on(reset, (state) => 0),
  on(multiplicar, (state) => state * 2),
  on(dividir, (state) => state / 2)
);
