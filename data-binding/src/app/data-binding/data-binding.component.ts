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
  constructor() { }

  getCurtirCurso(){
    return true;
  }
  getValor(){
    return 1+2;
  }
  ngOnInit(): void {
  }

}
