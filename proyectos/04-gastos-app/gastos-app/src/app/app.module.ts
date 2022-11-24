import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

// Modulos
import {AppRoutingModule} from './app-routing.module';
import {ReactiveFormsModule} from "@angular/forms";
import {AuthModule} from "./auth/auth.module";
import {NgChartsModule} from "ng2-charts";
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {StoreModule} from '@ngrx/store';
// Componentes
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {IngresoEgresoComponent} from './ingreso-egreso/ingreso-egreso.component';
import {EstadisticaComponent} from './ingreso-egreso/estadistica/estadistica.component';
import {DetalleComponent} from './ingreso-egreso/detalle/detalle.component';
import {FooterComponent} from './shared/footer/footer.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {SidebarComponent} from './shared/sidebar/sidebar.component';
import {OrdenIngresoPipe} from './ingreso-egreso/pipes/orden-ingreso.pipe';

import {environment} from '../environments/environment';
import {appReducers} from "./app.reducer";
import {SharedModule} from "./shared/shared.module";


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    IngresoEgresoComponent,
    EstadisticaComponent,
    OrdenIngresoPipe,
    DetalleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    StoreModule.forRoot(appReducers, {}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    NgChartsModule,
    AuthModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
