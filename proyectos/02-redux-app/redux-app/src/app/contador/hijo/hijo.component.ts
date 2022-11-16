import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  @Input() contador: number = 0;
  @Output() cambioContador = new EventEmitter<number>;

  constructor() {
  }

  ngOnInit(): void {
  }

  multiplicar() {
    this.contador *= 2
    this.cambioContador.emit(this.contador);
  }

  dividir() {
    this.contador /= 2;
    this.cambioContador.emit(this.contador);
  }

  escucharCambioContador(contador: number) {
    this.contador = contador;
    this.cambioContador.emit(this.contador);
  }
}
