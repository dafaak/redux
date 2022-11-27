import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
// Modulos Personalizados
import {SharedModule} from "./shared/shared.module";
import {UsuariosModule} from "./usuarios/usuarios.module";

// Componentes
import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    UsuariosModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
