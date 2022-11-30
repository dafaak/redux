import {Component, OnInit} from '@angular/core';
import {UsuarioService} from "../../services/usuario.service";
import {UsuarioModel} from "../../models/usuario.model";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  usuarios: UsuarioModel[] = [];

  constructor(
    private usuarioService: UsuarioService
  ) {
  }

  ngOnInit(): void {
    // this.usuarioService.getUsers()
    //   .subscribe(
    //     res => {
    //       this.usuarios = res;
    //       console.log(res);
    //     }
    //   )
  }

}
