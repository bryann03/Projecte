import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HeroeModel } from 'src/app/models/heroe.mode';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {

  heroe = new HeroeModel;

  constructor() { }

  ngOnInit(): void {
  }

  guardar(form: NgForm){
    if(form.invalid){
      console.log("FORM NO VÁLIDO");
      return;
    }
    console.log();
  }

}
