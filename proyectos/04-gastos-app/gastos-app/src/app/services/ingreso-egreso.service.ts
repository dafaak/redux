import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {IngresoEgresoModel} from "../models/ingreso-egreso.model";
import {AuthService} from "./auth.service";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IngresoEgresoService {

  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService,
  ) {
  }

  crearIngresoEgreso(ingresoEgreso: IngresoEgresoModel) {
    return this.firestore.doc(`${this.authService.user?.uid}/ingresos-egresos`)
      .collection('items')
      .add({...ingresoEgreso})
  }

  initIngresosEgresosListener(uid: string) {
    this.firestore.collection(`${uid}/ingresos-egresos/items`)
      .snapshotChanges() // para obtener el uid
      .pipe(
        map(snapshot => {
            return snapshot.map(doc => {
                const data: any = doc.payload.doc.data() // aqui se obtienen los datos del ingreso egreso
                return {
                  uid: doc.payload.doc.id,
                  ...data
                }
              }
            )
          }
        )
      )
      .subscribe(
        algo => {
          console.log({algo});
        }
      )
  }
}
