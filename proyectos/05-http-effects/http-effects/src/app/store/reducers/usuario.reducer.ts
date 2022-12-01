import {createReducer, on} from '@ngrx/store';
import {UsuarioModel} from "../../models/usuario.model";
import {cargarUsuario, cargarUsuarioError, cargarUsuarioSuccess, clearUsuario} from "../actions/usuario.actions";

export interface usuarioState {
  id: string | null;
  usuario: UsuarioModel | null;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const usuarioInitialState: usuarioState = {
  id: null,
  usuario: null,
  loaded: false,
  loading: false,
  error: null,
};

export const usuarioReducer = createReducer(
  usuarioInitialState,
  on(cargarUsuario, (state, {id}) => ({...state, id, loading: true})),
  on(cargarUsuarioSuccess, (state, {usuario}) => ({
      ...state,
      loading: false,
      loaded: true,
      error: null,
      usuario: {...usuario}
    })
  ),
  on(cargarUsuarioError, (state, {payload}) => ({
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
  on(clearUsuario, (state) => ({...state, usuario: null, loading: false, loaded: false,}))
)
