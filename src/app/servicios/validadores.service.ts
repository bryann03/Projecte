import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface ErrorValidate{
  ////ESTO PUEDE RETORNAR CUALQUIER CANTIDAD DE LLAVES Y ESAS LLAVES PUEDNE SER BOOELANOS
  [s:string]: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  //VA A REGRESAR UN OBJETO QUE DENTRO TENDRÁ UN STRING (QUE PUEDEN SER VARIAS) Y DICHA
  //PROPIEDAD VA A RETORNAR A LA VEZ UN 'boolean'
  noHuaya(control: FormControl): ErrorValidate{

    //SI DETECTA QUE EL APELLIDO ES 'huaya' RETORNA TRUE (SE ACTIVA EL VALIDADOR) SINO NADA
    //ESE '?' PARA COMPROBAR DE SI EL VALOR EXISTE QUE NO SEA NULL
    if(control.value?.toLowerCase() === 'huaya'){
      return{
        noHuaya: true
      }
    }
    return null;
  }

  //ES IMPORTANTE QUE RETORNE UNA FUNCOÓN PARA QUE PUEDA EJECUTARSE CÓMO VALIDADOR
  passwordsIguales( pass: string, repeatPass: string ){
    return ( formGroup: FormGroup ) => {
      const passControl = formGroup.controls[pass];
      const repeatPassControl = formGroup.controls[repeatPass];

      if( passControl.value === repeatPassControl.value ){
        repeatPassControl.setErrors(null);
      }
      else{
        repeatPassControl.setErrors({ noEsIgual: true })
      }
    }
  }

  //VALIDADRO ASÍNCRONO, DEVUELVE UNA PROMESA
  existeUserName( control: FormControl ): Promise<ErrorValidate> | Observable<ErrorValidate> {
    return new Promise( (resolve, reject) => {
      setTimeout( () => {
        if( control.value === 'huaya' ){
          resolve({ existe: true });
        }
        else{
          resolve(null);
        }
      }, 3000);
    })
  }
}
