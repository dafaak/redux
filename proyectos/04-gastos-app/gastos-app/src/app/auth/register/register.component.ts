import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

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
    this.authService.crearUsuario(nombre, correo, password)
      .then(credenciales => {
          console.log({credenciales});
          this.router.navigate(['/']);
        }
      )
      .catch(error => {
          console.error(error);
        }
      )
  }
}
