import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {environment} from '../environments/environment';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HijoComponent} from './contador/hijo/hijo.component';
import {NietoComponent} from './contador/nieto/nieto.component';
import {contadorReducer} from "./contador/contador.reducer";

import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    NietoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({contador: contadorReducer}),
    StoreDevtoolsModule.instrument({
        maxAge: 25, // cuantos estados mantener en la herramienta
        logOnly: environment.production
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
