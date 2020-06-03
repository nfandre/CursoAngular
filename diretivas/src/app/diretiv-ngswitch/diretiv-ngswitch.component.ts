import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiv-ngswitch',
  templateUrl: './diretiv-ngswitch.component.html',
  styleUrls: ['./diretiv-ngswitch.component.css']
})
export class DiretivNgswitchComponent implements OnInit {

  aba: string = "home";

  constructor() { }

  ngOnInit(): void {
  }

}
