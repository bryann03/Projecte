import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroeModel } from '../models/heroe.mode';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url = "https://loginapp-9f959.firebaseio.com";

  constructor( private http: HttpClient ) { }

  crearHeroe( heroe: HeroeModel ){
    return this.http.post(`${this.url}/heroes.json`, heroe)
              .pipe(
                map( (resp: any) => {
                  heroe.id = resp.name;
                  return heroe;
                })
              );
  }

  actualizarHeroe( heroe: HeroeModel ){

    //EL OBJETO 'HEROE' VIENE CON LA PORIEDAD ID Y NO QUEREMOS QUE SE CREE ESA PROPIEDAD 'id' EN EL OBJETO DE FIREBASE
    //CREAMOS UNA CONSTANTE TEMPORAL DEL OBJETO HEROE CON EL, PARA PODER ELIMINAR EL ATRIBUTO ID QUE VIENE Y PODER
    //MANDAR SOLO LAS DEMÁS PROPIEDADES
    const heroeTemp = {
      ...heroe
    };
    delete heroeTemp.id;
    return this.http.put(`${this.url}/heroes/${heroe.id}.json`, heroeTemp);
  }
}
