import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) {
    this.route.parent.params.subscribe( parametro =>{
      console.log('RUTA HIJA NUEVO');
      console.log(parametro);
    })
  }

  ngOnInit() {
  }

}
