import { MovilesService, Movil } from '../../servicios/moviles.service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Route, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movil',
  templateUrl: './movil.component.html',
  styleUrls: ['./movil.component.scss']
})
export class MovilComponent implements OnInit {

  movil_id: number;
  arrayMoviles: Movil;
  //movilDetalle: movil;

  constructor(private route: ActivatedRoute,
    private movil: MovilesService = new MovilesService()
    )
  {}

  ngOnInit() {
    this.movil_id = this.route.snapshot.params['id'];
    this.arrayMoviles = this.movil.getMovil(this.movil_id);
  }
}
