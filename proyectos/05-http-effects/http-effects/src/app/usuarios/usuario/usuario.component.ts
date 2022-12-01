import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.reducer";
import {cargarUsuario} from "../../store/actions";
import {UsuarioModel} from "../../models/usuario.model";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuario!: UsuarioModel | null;
  loading = false;
  error!: any;

  constructor(
    private router: ActivatedRoute,
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.store.select(state => state.usuario)
      .subscribe(
        ({usuario, loading, error}) => {
          this.usuario = usuario;
          this.loading = loading;
          this.error = error;
        }
      )
    this.router.params.subscribe(({id}) => {
      this.store.dispatch(cargarUsuario({id}));
    })
  }

}
