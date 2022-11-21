import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  logout() {
    Swal.fire({
      title: 'Espere por favor',
      didOpen: () => {
        Swal.showLoading(null);
      },
    });
    this.authService.logout()
      .then(
        resLogout => {
          Swal.close();
          this.router.navigate(['/login']);
        }
      )
      .catch(
        error => {
          Swal.fire({
            title: 'Error',
            text: 'Oops, algo salió mal!',
            confirmButtonText: 'Ok'
          });
          console.error(error);
        }
      )
  }
}
