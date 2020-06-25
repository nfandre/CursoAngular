import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'andre nascimento de freitas souza santos',
    rating: 4.2323232,
    paginas: 314,
    preco: 14.873,
    data: new Date(2016, 9, 22),
    url: 'httpdfsaf/sdfsadf.com'
  };
  livros: string[] = ['matematica', 'historia', 'geografia'];
  filtro: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  addLivro(valor: string) {
    this.livros.push(valor);
  }

  obterLivros() {
    if (this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === 'null') {
      return this.livros;
    }
    return this.livros.filter(v => {
      if (v.toLocaleLowerCase().indexOf(this.filtro.toLocaleLowerCase()) !== -1) {
        return true;
      } else {
        return false;
      }
    });
  }

}
