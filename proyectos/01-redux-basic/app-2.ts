import {Action} from './ngrx-fake/ngrx';
import {
  incrementadorAction,
  decrementadorAction,
  multiplicarAction,
  dividirAction,
  resetAction
} from './contador/contador.actions'

const reducer = (state = 100, action: Action) => {
  switch (action.type) {
    case 'INCREMENTAR':
      return state += 1;
    case 'DECREMENTAR':
      return state -= 1;
    case 'MULTIPLICAR':
      return state * action.payload;
    case 'DIVIDIR':
      return state / action.payload;
    case 'RESET':
      return state = 0;
    default:
      return state;
  }
};

// Usar el reducer
console.log(reducer(100, incrementadorAction)); // 101
console.log(reducer(100, decrementadorAction)); // 99
console.log(reducer(100, multiplicarAction)); // 200
console.log(reducer(100, dividirAction)); // 50
console.log(reducer(100, resetAction)); // 0