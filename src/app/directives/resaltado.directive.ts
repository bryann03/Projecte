import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(
    private element: ElementRef
  ) {
    console.log('DIRECTIVA');
  }

  @Input("appResaltado") nuevoColor: string;

  @HostListener('mouseenter') mouseEnter() {
    this.resaltar(this.nuevoColor || 'blue');
  }

  @HostListener('mouseleave') mouseLeave() {
    this.resaltar(null);
  }

  private resaltar(color:string){
    this.element.nativeElement.style.color = color;
  }

}
