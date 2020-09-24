import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HeroeModel } from 'src/app/models/heroe.mode';
import { HeroesService } from 'src/app/servicios/heroes.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {

  heroe = new HeroeModel;

  constructor( private heroeService: HeroesService ) { }

  ngOnInit(): void {
  }

  guardar(form: NgForm){
    if(form.invalid){
      console.log("FORM NO VÁLIDO");
      return;
    }

    Swal.fire({
      title: 'Espere',
      text: 'Guardando info...',
      allowOutsideClick: false
    });
    Swal.showLoading();

    let peticion: Observable<any>;

    if( this.heroe.id ){
      peticion = this.heroeService.actualizarHeroe(this.heroe);
      console.log("ACTUALIZADO");
    }
    else{
      peticion = this.heroeService.crearHeroe(this.heroe);
      console.log("CREADO");
    }

    peticion.subscribe(resp => {
      Swal.fire({
        title: this.heroe.nombre,
        text: 'Se actualizó correctamente'
      });
    })

  }

}
