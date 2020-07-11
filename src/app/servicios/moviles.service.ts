import { Injectable } from '@angular/core';
import { MovilComponent } from '../components/movil/movil.component';

@Injectable({
  providedIn: 'root'
})
export class MovilesService {

  constructor() {
    console.log("Sercicio ready");
  }

  private moviles: Movil[] = [
    {
      id: 0,
      nombre: "Galaxy S6",
      desc: "Descripción del movil",
      img: "assets/img/galaxys6.jpg",
      precio: "500€",
      marca: "Samsung"
    },
    {
      id: 1,
      nombre: "Galaxy S7",
      desc: "Descripción del movil",
      img: "assets/img/galaxys7.jpg",
      precio: "7000€",
      marca: "Samsung"
    },
    {
      id: 2,
      nombre: "Galaxy S8",
      desc: "Descripción del movil",
      img: "assets/img/galaxys8.jpg",
      precio: "1000€",
      marca: "Samsung"
    },
    {
      id: 3,
      nombre: "Galaxy S9",
      desc: "Descripción del movil",
      img: "assets/img/galaxys9.jpg",
      precio: "1000€",
      marca: "Samsung"
    },
    {
      id: 4,
      nombre: "Galaxy S10",
      desc: "Descripción del movil",
      img: "assets/img/galaxys10.jpg",
      precio: "1000€",
      marca: "Samsung"
    },
    {
      id: 5,
      nombre: "Galaxy S20",
      desc: "Descripción del movil",
      img: "assets/img/galaxys20.jpg",
      precio: "1000€",
      marca: "Samsung"
    }
  ]

  //DEVUELVE EL ARRAY DE MOVILES
  getMoviles():Movil[]
  {
    return this.moviles;
  }

  //DEVUELVE EL MOVIL POR SU 'id'
  getMovil(id:number)
  {
    return this.moviles.find(object => object.id == id);
  }

  buscarMovil(nombre: string){
    let arrayMoviles: Movil[] = [];
    nombre = nombre.toLowerCase();
    for(let movil of this.moviles){
      let nombreFor = movil.nombre.toLowerCase();
      if(nombreFor.indexOf( nombre ) >= 0){
        arrayMoviles.push(movil);
      }
    }

    return arrayMoviles;
  }
}

//SE CREA UNA 'interface' PARA PODER USAR ARRAYS DE MOVILES
export interface Movil {
  id: number;
  nombre: string;
  desc: string;
  img: string;
  precio: string;
  marca: string;
}
