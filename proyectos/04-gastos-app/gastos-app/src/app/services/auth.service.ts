import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {map, Observable} from "rxjs";
import {UsuarioModel} from "../models/usuario.model";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {
  }

  initAuthListener() {
    this.auth.authState.subscribe(
      fbUsuer => {
        console.log(fbUsuer?.email);
        console.log(fbUsuer?.uid);
      }
    )
  }

  crearUsuario(nombre: string, email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password)
      .then((
          {
            user
          }
        ) => {
          if (user != null) {
            const newUser = new UsuarioModel(user.uid, nombre, email);
            return this.firestore.doc(`${user.uid}/usuario`).set({...newUser});
          } else {
            return;
          }
        }
      );
  }

  login(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  isAuth(): Observable<boolean> {
    return this.auth.authState.pipe(
      map(
        fbUser => {
          return fbUser != null;

        }
      )
    )
  }
}
