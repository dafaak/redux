import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {UsuarioService} from "../../services/usuario.service";
import * as usuarioActions from "../actions";
import {map, mergeMap, tap, catchError, of} from "rxjs";


@Injectable()
export class UsuarioEffects {
  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService,
  ) {
  }

  cargarUsuario$ = createEffect(
    () => this.actions$.pipe(
      ofType(usuarioActions.cargarUsuario),
      // tap(data => {
      //     console.log('effect tap:', data)
      //   }
      // ),
      mergeMap(
        (action) => this.usuarioService.getUserById(action.id)
          .pipe(
            map(user => usuarioActions.cargarUsuarioSuccess({usuario: user})),
            catchError(err => of(usuarioActions.cargarUsuarioError({payload: err}), usuarioActions.clearUsuario()))
          )
      )
    )
  );
}
