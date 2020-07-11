import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MovilesService } from '../../servicios/moviles.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  moviles: any[] = [];
  param: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movilesService: MovilesService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      this.param = params['termino'];
      this.moviles = this.movilesService.buscarMovil(this.param);
    })
  }

}
