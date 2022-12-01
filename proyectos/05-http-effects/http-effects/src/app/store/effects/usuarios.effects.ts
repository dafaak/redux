import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {UsuarioService} from "../../services/usuario.service";
import * as usuarioActions from "../actions";
import {map, mergeMap, tap} from "rxjs";
import {UsuarioModel} from "../../models/usuario.model";

@Injectable()
export class UsuariosEffects {
  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService,
  ) {
  }

  cargarUsuarios$ = createEffect(
    () => this.actions$.pipe(
      ofType(usuarioActions.cargarUsuarios),
      // tap(data => {
      //     console.log('effect tap:', data)
      //   }
      // ),
      mergeMap(
        () => this.usuarioService.getUsers()
          .pipe(
            map(users => usuarioActions.cargarUsuariosSuccess({usuarios: users})
            )
          )
      )
    )
  );
}
