import {Component, OnInit} from '@angular/core';
import {UsuarioService} from "../../services/usuario.service";
import {UsuarioModel} from "../../models/usuario.model";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.reducer";
import {cargarUsuarios} from "../../store/actions";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  usuarios: UsuarioModel[] = [];
  loading = false;
  error!: any;

  constructor(
    private usuarioService: UsuarioService,
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.store.select(state => state.usuarios)
      .subscribe(
        ({usuarios, loading, error}) => {
          this.usuarios = usuarios;
          this.loading = loading;
          this.error = error;
        }
      )
    this.store.dispatch(cargarUsuarios());
    // this.usuarioService.getUsers()
    //   .subscribe(
    //     res => {
    //       this.usuarios = res;
    //       console.log(res);
    //     }
    //   )
  }

}
