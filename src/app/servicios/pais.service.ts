import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient) { }

  getPaises(){
    return this.http.get('https://restcountries.eu/rest/v2/lang/es')
      .pipe(
        map( (respuesta: any[]) =>
          respuesta.map( pais => ({ nombre: pais.name, codigo: pais.alpha3Code }) )
        )
      );
  }
}
