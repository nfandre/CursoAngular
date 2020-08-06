import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: 'andre',
    email: 'andre@andre.com'
  };

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form): void {
    console.log(form);
  }

}
