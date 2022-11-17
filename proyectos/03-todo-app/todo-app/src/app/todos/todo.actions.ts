import {createAction, props} from "@ngrx/store";

export const crearTodo = createAction('[TODO] Crear todo', props<{ texto: string }>());
export const toggleTodo = createAction('[TODO] Toggle todo', props<{ id: number }>());
