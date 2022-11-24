import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../app.reducer";
import {IngresoEgresoModel} from "../../models/ingreso-egreso.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styleUrls: ['./estadistica.component.css']
})
export class EstadisticaComponent implements OnInit, OnDestroy {

  items: IngresoEgresoModel[] = [];
  numeroIngresos = 0;
  numeroEgresos = 0;
  totalIngresos = 0;
  totalEgresos = 0;


  itemsSubscription!: Subscription;

  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.itemsSubscription = this.store.select(state => {
      return state.ingresosEgresos;
    })
      .subscribe(
        ({items}) => {
          this.generarEstadistica(items);
        }
      )
  }

  ngOnDestroy() {
    this.itemsSubscription.unsubscribe();
  }

  generarEstadistica(items: IngresoEgresoModel[]) {
    this.numeroIngresos = 0;
    this.totalIngresos = 0;
    this.numeroEgresos = 0;
    this.totalEgresos = 0;
    items.forEach(item => {
        if (item.tipo === 'ingreso') {
          this.totalIngresos += item.monto;
          this.numeroIngresos++;
        }
        if (item.tipo === 'egreso') {
          this.totalEgresos += item.monto;
          this.numeroEgresos++;
        }
      }
    )
  }
}
