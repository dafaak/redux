import {createAction, props} from "@ngrx/store";
import {UsuarioModel} from "../../models/usuario.model";

export const cargarUsuario = createAction(
  '[Usuario] cargarUsuario',
  props<{ id: string }>()
);
export const cargarUsuarioSuccess = createAction(
  '[Usuario] cargarUsuarioSucces',
  props<{ usuario: UsuarioModel }>()
);
export const cargarUsuarioError = createAction(
  '[Usuario] cargarUsuarioError',
  props<{ payload: any }>()
);
export const clearUsuario = createAction(
  '[Usuario] clearUsuario'
);
