import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe( parametro =>{
      console.log('RUTA PADRE');
      console.log(parametro);
    })
  }

  ngOnInit() {
  }

}
