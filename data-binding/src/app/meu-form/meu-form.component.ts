import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {

  pessoa: any = {
    nome: 'André Nascimento',
    idade: 20
  }
  nome:string = 'abc';
  constructor() { }

  ngOnInit(): void {
  }

}
