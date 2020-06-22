import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appNgElse]'
})
export class NgElseDirective {

  @Input() set appNgElse(condition: boolean) {
    if(!condition){
      this.viewContainerRef.createEmbeddedView(this.templaterRef);
    }else{
      this.viewContainerRef.clear();
    }
  }
  constructor(
    private templaterRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

}
