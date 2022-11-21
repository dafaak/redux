import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.loginForm = fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      }
    )
  }

  ngOnInit(): void {
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }
    const {email, password} = this.loginForm.value;
    Swal.fire({
      title: 'Espere por favor',
      didOpen: () => {
        Swal.showLoading(null);
      },
    });
    this.authService.login(email, password)
      .then(
        resLogin => {
          console.log({resLogin});
          Swal.close();
          this.router.navigate(['/']);
        }
      )
      .catch(error => {
          console.error({error});
          Swal.close();
          Swal.fire({
              title: 'Error!',
              text: 'Oops, algo salió mal!',
              icon: 'error',
              confirmButtonText: 'Ok'
            }
          );
        }
      )
  }

}
