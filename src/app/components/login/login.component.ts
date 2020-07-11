import { AuthService } from './../../servicios/auth.service';
import { UsuarioModel } from './../../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();
  remember = false;

  constructor(private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('email')){
      this.usuario.email = localStorage.getItem('email');
      this.remember = true;
    }
  }

  login(form: NgForm) {

    if (form.valid) {
      Swal.fire({
        allowOutsideClick: false,
        icon: 'info',
        text: 'Wait a momento..'
      });
      Swal.showLoading();

      this.auth.logIn(this.usuario)
        .subscribe((data) => {
          Swal.close();
          this.router.navigateByUrl('/main');
          if(this.remember){
            localStorage.setItem('email', this.usuario.email);
          }
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            text: error.error.error.message
          });
        })
    }
  }
}
