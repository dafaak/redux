import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {decrementar, incrementar} from "./contador/contador.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-app';
  contador!: number;

  constructor(private store: Store) {
    this.store.select((state) => {
        // @ts-ignore
        return state.contador
      }
    ).subscribe(
      (state) => {
        this.contador = state;
      }
    )
  }

  incrementar() {
    this.store.dispatch(incrementar());
  }

  decrementar() {
    this.store.dispatch(decrementar());
  }

  // escucharContador(contador: number) {
  //   this.contador = contador;
  // }
}
