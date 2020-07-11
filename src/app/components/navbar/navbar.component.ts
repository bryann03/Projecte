import { AuthService } from './../../servicios/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {

  }

  buscarMovil(nombre: string){
    this.router.navigate(['/main/buscar', nombre]);
    console.log(nombre);
  }

  salir(){
    this.auth.logOut();
    this.router.navigateByUrl('/login');
  }

}
