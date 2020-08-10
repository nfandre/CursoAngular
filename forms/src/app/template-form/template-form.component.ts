import {Component, OnInit} from '@angular/core';

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

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(form): void {
    console.log(form);
  }
  verificaValidToTouched(campo) {
    return campo.invalid && campo.touched;
  }
  cssError(campo) {
    return {
      'has-error': this.verificaValidToTouched(campo),
      'has-feedback': this.verificaValidToTouched(campo)
    };
  }

}
