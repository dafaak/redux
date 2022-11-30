import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
// Modulos Personalizados
import {SharedModule} from "./shared/shared.module";
import {UsuariosModule} from "./usuarios/usuarios.module";

// Componentes
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {StoreModule} from "@ngrx/store";
import {appReducers} from "./store/app.reducer";
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from "../environments/environment";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    UsuariosModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers, {}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
