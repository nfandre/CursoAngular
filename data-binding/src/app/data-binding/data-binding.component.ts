import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'www.nfandre.com';
  curso:boolean = false;
  urlImagem: string = 'https://st.depositphotos.com/1752371/1250/i/450/depositphotos_12507644-stock-photo-a-sword-with-a-red.jpg';

  valorAtual: string = '';
  valorSalvo: string;

  isMouseOver: boolean = false;

  nomeDoCurso: string = "Angular";


  constructor() { }

  getCurtirCurso(){
    return true;
  }
  getValor(){
    return 1+2;
  }
  botaoClicado(){
    alert("Clicou");
  }
  onKeyUp(evento: KeyboardEvent){
    console.log((<HTMLInputElement> evento.target).value );
    this.valorAtual =( <HTMLInputElement> evento.target).value;

  }
  salvarValor(valor){
    this.valorSalvo = valor;
  }

  onMouseOverUp(){
    this.isMouseOver = true;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  ngOnInit(): void {
  }

}
