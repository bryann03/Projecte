import { Component, OnInit } from '@angular/core';
import { MovilesService } from '../../servicios/moviles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moviles',
  templateUrl: './moviles.component.html',
  styleUrls: ['./moviles.component.scss']
})
export class MovilesComponent implements OnInit {

  /*CREAMOS UN OBJETO DE TIPO 'MovilesService' para poder acceder al método
  'getMoviles()' y poder extraer los datos*/
  private movil: MovilesService = new MovilesService();
  arrayMoviles = this.movil.getMoviles();

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }
  verDetalle(index:number){
    this.router.navigate(['/main/movil', index]);
  }

}
