import {Directive, ElementRef, HostBinding, HostListener, Renderer2 , Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOuver() {
    this.backgroundColor = this.defaultColor;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.highlightColor;
  }
  @HostBinding('style.background-color') backgroundColor: string;

  @Input() defaultColor: string = 'white';
  @Input('appHighlight') highlightColor: string = 'yellow';
  constructor(
    private  elementRef: ElementRef,
    private render: Renderer2
  ) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

}
