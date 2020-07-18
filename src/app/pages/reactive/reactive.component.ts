import { ValidadoresService } from './../../servicios/validadores.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private validador: ValidadoresService) {
    this.crearFormulario();
    this.cargarData();
  }

  ngOnInit() {
  }

  get pasatiempos(){
    return this.formGroup.get('pasatiempos') as FormArray;
  }

  get nombreNoValido(){
    return this.formGroup.get('nombre').invalid && this.formGroup.get('nombre').touched
  }

  get apellidoNoValido(){
    return this.formGroup.get('apellido').invalid && this.formGroup.get('apellido').touched
  }

  get correoNoValido(){
    return this.formGroup.get('correo').invalid && this.formGroup.get('correo').touched
  }

  get distritoNoValido(){
    return this.formGroup.get('direccion.distrito').invalid && this.formGroup.get('direccion.distrito').touched
  }

  get ciudadNoValido(){
    return this.formGroup.get('direccion.ciudad').invalid && this.formGroup.get('direccion.ciudad').touched
  }

  get pass1NoValido(){
    return this.formGroup.get('pass').invalid && this.formGroup.get('pass').touched
  }

  get userNoValido(){
    return this.formGroup.get('userName').invalid && this.formGroup.get('userName').touched
  }

  get repeatPassNoValido(){
    const pass1 = this.formGroup.get('pass').value;
    const pass2 = this.formGroup.get('repeatPass').value;

    //SI PASS1 ES IGUAL A PASS2 RETORNA TRUE (CON LOS DOS PUNTOS) SINO (CON EL INTERROGANTE) RETORNA FALSE
    return ( pass1 === pass2 ) ? false : true;
  }

  crearFormulario(){
    this.formGroup = this.formBuilder.group({
      nombre: ['', [ Validators.required, Validators.minLength(5) ] ],
      //PARA EJECUTAR EL VALIDADOR NO EJECUTAMOS COMO SIEMPRE SINO SIMPLEMENTE LE HACEMOS LA REFERENCIA SIN '()'
      apellido: ['', [ Validators.required, this.validador.noHuaya ] ],
      correo: ['', [ Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'), Validators.required ] ],
      //VALIDADOR ASINCRONO
      userName: ['', , this.validador.existeUserName],
      pass: ['', Validators.required],
      repeatPass: ['', Validators.required],
      direccion: this.formBuilder.group({
        distrito: ['', Validators.required],
        ciudad: ['', Validators.required],
      }),
      pasatiempos: this.formBuilder.array([])
    },{
      validators: this.validador.passwordsIguales('pass', 'repeatPass')
    });
  }

  cargarData(){
    this.formGroup.reset({
      nombre: "BRYANSITO",
      apellido: "H",
      correo: "ivan@gmail.com",
      direccion: {
        distrito: "BCN",
        ciudad: "Barcelona"
      }
    })
  }

  guardar(){
    if(this.formGroup.invalid){
      return Object.values(this.formGroup.controls).forEach(control => {
        if(control instanceof FormGroup){
          Object.values(control.controls).forEach(element => element.markAllAsTouched() );
        }
        control.markAsTouched();
      });
    }

    this.formGroup.reset({
      nombre:"SN"
    });
  }

  agregarPasatiempo(){
    this.pasatiempos.push( this.formBuilder.control('') )
  }

  borrarPasatiempo(i: number){
    this.pasatiempos.removeAt(i);
  }

}
