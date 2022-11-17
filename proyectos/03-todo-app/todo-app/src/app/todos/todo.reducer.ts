import {Action, createReducer, on} from "@ngrx/store";
import {crearTodo, editarTodo, eliminarTodo, toggleTodo} from "./todo.actions";
import {Todo} from "./models/todo.model";

export const estadoInicial: Todo[] = [
  new Todo('Obtener la espada Deku'),
  new Todo('Hablar con el arbol Deku'),
  new Todo('Hablar con Zelda'),
];

export const _todoReducer = createReducer(
  estadoInicial,
  on(crearTodo, (state, {texto}) => [...state, new Todo(texto)]),
  on(eliminarTodo, (state, {id}) => {
      return state.filter(todo => todo.id !== id);
    }
  ),
  on(toggleTodo, (state, {id}) => {
      return state.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              completado: !todo.completado
            };
          } else {
            return todo;
          }

        }
      )
    },
  ),
  on(editarTodo, (state, {id, texto}) => {
      return state.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              texto: texto
            };
          } else {
            return todo;
          }

        }
      )
    },
  ),
);

export function todoReducer(state: Todo[], action: Action) {
  return _todoReducer(state, action)
}
