import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-movil',
  templateUrl: './card-movil.component.html',
  styleUrls: ['./card-movil.component.scss']
})
export class CardMovilComponent implements OnInit {

  //CON EL DECORADOR '@Input()' LE ESTOY DICIENDO QUE LA PROPIEDAD VA A SER RECIBIDA DESDE FUERA
  @Input() movil: any = {};
  @Input() index: number;

  //DEL HIJO AL PADRE
  //CON EL '@Output()' Y CON 'EventEmitter' PARA DECIRLE QUE VA A EMITIR Y DE QUE TIPO
  @Output() movilSeleccionado: EventEmitter<number>;

  constructor(
    private router: Router
  ){
    //INICIALIZAMOS EL 'EventEmitter'
    this.movilSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verDetalle(){
    // this.movilSeleccionado.emit( this.index );
    this.router.navigate(['/main/movil', this.index]);
  }

}
