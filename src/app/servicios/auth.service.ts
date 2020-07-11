import { map } from 'rxjs/operators';
import { UsuarioModel } from './../models/usuario.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1';
  private apiKey = 'AIzaSyCL194hN6_aHiTHdpbGp6XdUNPrX84M3to';
  userToken: string;

  //CERAR USUARIO
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  //LOGIN
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(private http: HttpClient) {
    this.leerToken();
  }

  logOut() {
    localStorage.removeItem('token');
  }

  logIn(usuario: UsuarioModel) {
    const authData = {
      //CON LOS 3 PUNTOS LE ESTOY PASANDO LAS PROPIEDADES QUE VIENEN CON EL OBJETO USUARIO
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(
      `${this.url}/accounts:signInWithPassword?key=${this.apiKey}`,
      authData
    ).pipe(
      map(resp => {
        this.guardarToken(resp['idToken']);
        return resp;
      })
    );
  }

  newUser(usuario: UsuarioModel) {
    const authData = {
      //CON LOS 3 PUNTOS LE ESTOY PASANDO LAS PROPIEDADES QUE VIENEN CON EL OBJETO USUARIO
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(
      `${this.url}/accounts:signUp?key=${this.apiKey}`,
      authData
    ).pipe(
      map(resp => {
        this.guardarToken(resp['idToken']);
        return resp;
      })
    );
  }

  private guardarToken(idToken: string) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    let hoy = new Date();
    hoy.setSeconds(3600);
    localStorage.setItem('expira', hoy.getTime().toString());
  }

  leerToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    }
    else {
      this.userToken = '';
    }
    return this.userToken;
  }

  estaAutenticado(): boolean{
    if(this.userToken.length < 2){
      return false;
    }

    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    if(expiraDate > new Date()){
      return true;
    }
    else{
      return false;
    }
  }
}
