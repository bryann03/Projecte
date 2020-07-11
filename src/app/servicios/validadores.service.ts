import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  //VA A REGRESAR UN OBJETO QUE DENTRO TENDRÁ UN STRING (QUE PUEDEN SER VARIAS) Y DICHA
  //PROPIEDAD VA A RETORNAR A LA VEZ UN 'boolean'
  noHuaya(control: FormControl): { [s:string]: boolean }{

    //SI DETECTA QUE EL APELLIDO ES 'huaya' RETORNA TRUE (SE ACTIVA EL VALIDADOR) SINO NADA
    //ESE '?' PARA COMPROBAR DE SI EL VALOR EXISTE QUE NO SEA NULL
    if(control.value.toLowerCase() === 'huaya'){
      return{
        noHuaya: true
      }
    }

    return null;
  }
}
