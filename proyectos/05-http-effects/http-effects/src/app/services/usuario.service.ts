import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map} from "rxjs";
import {UsuarioModel} from "../models/usuario.model";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getUsers() {
    return this.httpClient.get(`${environment.api}/users?perPage=6`)
      .pipe(
        map((res: any) => res['data']
        )
      )
  }

}
