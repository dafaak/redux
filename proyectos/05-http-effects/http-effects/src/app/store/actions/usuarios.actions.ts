import {createAction, props} from "@ngrx/store";
import {UsuarioModel} from "../../models/usuario.model";

export const cargarUsuarios = createAction('[Usuarios] cargarUsuarios');
export const cargarUsuariosSuccess = createAction('[Usuarios] cargarUsuariosSucces',
  props<{ usuarios: UsuarioModel[] }>()
);
export const cargarUsuariosError = createAction('[Usuarios] cargarUsuariosError',
  props<{ payload: any }>()
);
