import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-app';
  contador: number;

  constructor() {
    this.contador = 20;
  }

  incrementar() {
    this.contador += 1;
  }

  decrementar() {
    this.contador -= 1;
  }

  escucharContador(contador: number) {
    this.contador = contador;
  }
}
