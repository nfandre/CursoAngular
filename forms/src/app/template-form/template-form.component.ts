import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {from} from 'rxjs';
import {NgForm} from '@angular/forms';

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

  constructor(
    private http: HttpClient
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {

    console.log(form);
    this.http.post('https://httpbin.org/post', JSON.stringify(form.value))
      .subscribe(resonse => {
        console.log(resonse);
      });
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

  consultaCep(cep, f) {
    const c = cep.replace(/\D/g, '');

    if (c !== null) {
      const validacep = /^[0-9]{8}$/;
      if (validacep.test(cep)) {
        this.resetaDadosForm(f);
        this.http.get(`https://viacep.com.br/ws/${c}/json`).subscribe(
          response => {
            console.log(response);
            this.popularDados(response, f);
          });
        // .map(value => value.json());
      }
    }

  }

  popularDados(dados, form) {
    // form.setValue({
    //   nome: form.value.nome,
    //   email: form.value.email,
    //   endereco: {
    //     cep: dados.cep,
    //     numero: '',
    //     complemento: dados.complemento,
    //     rua: dados.logradouro,
    //     bairro: dados.bairro,
    //     cidade: dados.localidade,
    //     estado: dados.uf
    //   }
    // });
    form.form.patchValue({
      endereco: {
        cep: dados.cep,
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  resetaDadosForm(form) {
    form.form.patchValue({
      endereco: {
        cep: null,
        complemento: null,
        rua: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }
}
