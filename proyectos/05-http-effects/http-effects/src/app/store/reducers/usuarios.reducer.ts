import {createReducer, on} from '@ngrx/store';
import {cargarUsuarios, cargarUsuariosError, cargarUsuariosSuccess} from "../actions";
import {UsuarioModel} from "../../models/usuario.model";

export interface usuariosState {
  usuarios: UsuarioModel[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const usuariosInitialState: usuariosState = {
  usuarios: [],
  loaded: false,
  loading: false,
  error: null,
};

export const usuariosReducer = createReducer(
  usuariosInitialState,
  on(cargarUsuarios, (state) => ({...state, loading: true})),
  on(cargarUsuariosSuccess, (state, {usuarios}) => ({
      ...state,
      loading: false,
      loaded: true,
      usuarios: [...usuarios]
    })
  ),
  on(cargarUsuariosError, (state, {payload}) => ({
      ...state,
      loading: false,
      loaded: false,
      error: {
        url: payload.url,
        name: payload.name,
        message: payload.message
      }
    })
  ),
)
