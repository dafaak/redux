import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.formGroup = this.fb.group(
      {
        nombre: ['', [Validators.required]],
        correo: ['', [Validators.email, Validators.required]],
        password: ['', [Validators.required]],

      }
    )
  }

  ngOnInit(): void {
  }

  crearUsuario() {
    if (this.formGroup.invalid) {
      return;
    }
    const {nombre, correo, password} = this.formGroup.value;
    Swal.fire({
      title: 'Espere por favor',
      didOpen: () => {
        Swal.showLoading(null);
      },
    });
    this.authService.crearUsuario(nombre, correo, password)
      .then(credenciales => {
          console.log({credenciales});
          Swal.close();
          this.router.navigate(['/']);
        }
      )
      .catch(error => {
          console.error(error);
          Swal.close();
          Swal.fire({
              title: 'Error!',
              text: 'Oops! No pudimos crear tu cuenta!',
              icon: 'error',
              confirmButtonText: 'Cool'
            }
          );
        }
      )
  }
}
