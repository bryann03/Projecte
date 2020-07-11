import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(arrayImagenes: any[]): string {
    if(!arrayImagenes){
      return 'assets/img/no-image.png';
    }
    if(arrayImagenes.length > 0){
      return arrayImagenes[0].url;
    }
    else{
      return 'assets/img/no-image.png';
    }
  }

}
