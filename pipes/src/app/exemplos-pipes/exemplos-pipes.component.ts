import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Learning Data dfasdfsdfdsfasfdasfd',
    rating: 4.2323232,
    paginas: 314,
    preco: 14.873,
    data: new Date(2016,9, 22),
    url: 'httpdfsaf/sdfsadf.com'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
