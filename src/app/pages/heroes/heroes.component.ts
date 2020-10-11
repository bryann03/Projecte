import { Component, OnInit } from '@angular/core';
import { HeroeModel } from 'src/app/models/heroe.mode';
import { HeroesService } from 'src/app/servicios/heroes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: HeroeModel[] = [];
  cargando = false;

  constructor( private heroeService: HeroesService  ) { }

  ngOnInit(): void {
    this.cargando = true;
    this.heroeService.getHeroes()
        .subscribe(resp => {
          this.heroes = resp;
          this.cargando = false;
        })
  }

  borrarHeroe(heroe: HeroeModel, index: number){
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want delete ' + heroe.nombre,
      showConfirmButton: true,
      showCancelButton: true
    }).then(resp => {
      if(resp.value){
        //EN VEZ DE VOLVER A LLAMAR A LA BD Y VOLVER A TRAER TODOS LOS REGISTROS SIN EL QUE SE HA BORRADO,
        //ELIMINAMOS EL REGISTRO DIRECTAMENTE DEL 'ARRAY' DE LOS HEROES PASÁNDOLE SU INDEX
        this.heroes.splice(index, 1);
        this.heroeService.deleteHeroe(heroe.id).subscribe();
      }
    })
  }
}
