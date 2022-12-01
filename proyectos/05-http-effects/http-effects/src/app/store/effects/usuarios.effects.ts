import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {UsuarioService} from "../../services/usuario.service";
import {cargarUsuarios} from "../actions";
import {mergeMap, tap} from "rxjs";

@Injectable()
export class UsuariosEffects {
  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService,
  ) {
  }

  cargarUsuarios$ = createEffect(
    () => this.actions$.pipe(
      ofType(cargarUsuarios),
      tap(data => {
        console.log('effect tap:', data)
      }),
      mergeMap(
        () => this.usuarioService.getUsers()
          .pipe(
            tap(data => {
              console.log('getUsers effect', data)
            })
          )
      )
    )
  );
}
