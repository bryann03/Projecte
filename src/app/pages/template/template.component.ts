import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from 'src/app/servicios/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: '',
    apellido: '',
    correo: '',
    pais: ''
  };

  paises: any[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit() {
    this.paisService.getPaises()
        .subscribe(paises => {
          this.paises = paises;
          this.paises.unshift({
            nombre: '[Seleccione país]',
            codigo: ''
          })
        });
  }


  guardar(form: NgForm){
    if(form.valid){
      console.log(form.value);
    }
    else{
      Object.values(form.controls).forEach(control => {
        control.markAsTouched();
      });
      console.log("FORM NO VALID");
    }
  }

}
