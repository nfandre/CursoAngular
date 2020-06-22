import {Directive, Host, HostListener, ElementRef, Renderer2 , HostBinding} from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOuver() {
    this.backgroundColor = 'yellow';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = 'white';
  }
  @HostBinding('style.background-color') backgroundColor: string;
  constructor( private  elementRef: ElementRef, private render: Renderer2) { }

}
