import {AfterContentInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, OnChanges, DoCheck, OnDestroy, AfterContentInit {

  @Input() valorInicial: number = 10;

  constructor() {
    this.log('constructor');
  }

  ngOnInit(): void {
    this.log('ngOnInit');
  }
  ngOnChanges(){
    this.log('ngOnChanges');
  }
  ngDoCheck(){
    this.log('ngDoCheck');
  }

  ngOnDestroy(){
    this.log('ngOnDestroy');
  }
  ngAfterContentInit(){
    this.log('ngAfterContentInit');
  }


  private log(hook: string){
    console.log(hook);
  }
}
