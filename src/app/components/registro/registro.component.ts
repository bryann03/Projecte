import { AuthService } from './../../servicios/auth.service';
import { UsuarioModel } from './../../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;
  remember = false;

  constructor(private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
  }

  onSubmit(form: NgForm) {

    if (form.valid) {
      Swal.fire({
        allowOutsideClick: false,
        icon: 'info',
        text: 'Wait a momento..'
      });
      Swal.showLoading();

      this.auth.newUser(this.usuario)
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
    else {
      console.log("NO VALIDO");
    }
  }

}
