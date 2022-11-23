import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../app.reducer";
import {filter, Subscription} from "rxjs";
import {user} from "@angular/fire/auth";
import {IngresoEgresoService} from "../services/ingreso-egreso.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userSubscription!: Subscription;

  constructor(
    private store: Store<AppState>,
    private ingresoEgresoService: IngresoEgresoService
  ) {
  }

  ngOnInit(): void {
    this.userSubscription = this.store.select((state) => {
      return state.user
    }).pipe(
      filter(auth => auth.user != null)
    )
      .subscribe(
        user => {
          // @ts-ignore
          this.ingresoEgresoService.initIngresosEgresosListener(user.user?.uid)
        }
      )
  }

}
