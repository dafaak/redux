import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from "./dashboard.component";
import {SharedModule} from "../shared/shared.module";
import {RouterModule, Routes} from "@angular/router";
import {dashboardRoutes} from "./dashboard.routes";
import {AuthGuard} from "../services/auth.guard";


const rutasHijas: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: dashboardRoutes,
  },
]

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    SharedModule,
    RouterModule,
    RouterModule.forChild(rutasHijas),
  ],
})
export class DashboardModule {
}
