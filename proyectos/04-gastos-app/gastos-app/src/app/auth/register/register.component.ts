import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
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
    console.log(this.formGroup);
    console.log(this.formGroup.valid);
    console.log(this.formGroup.value);
  }
}
