import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  nombre: string = 'Captain America';
  nombre2: string = 'bRyaN HuayAmABE';
  arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  porcentaje: number = 0.235;
  salario: number = 1234.5;
  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: '20',
    direccion: {
      calle: 'piruleta',
      casa: 20
    }
  }
  valorPromesa = new Promise<string>( (resolve) => {
    setTimeout(() => {
      resolve('LLEGÓ LA DATA');
    }, 4500);
  });

  fecha: Date = new Date();
  idioma: string = 'es';
  videoURL: string = 'https://www.youtube.com/embed/S-l6a34mwWw';


  constructor() { }

  ngOnInit() {
  }

  changeToSpanish(){
    this.idioma = 'es';
  }
  changeToEnglish(){
    this.idioma = 'en';
  }

}
