import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="sizeLetra">
      Hola mundo...
    </p>

    <button class="btn btn-success mr-2" (click)="sizeLetra = sizeLetra + 5">
      Aumentar tamaño letra
    </button>

    <button class="btn btn-danger" (click)="sizeLetra = sizeLetra - 5">
      Disminuir tamaño letra
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  sizeLetra: number = 50;

  constructor() { }

  ngOnInit() {
  }

}
