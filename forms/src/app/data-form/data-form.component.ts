import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {concatMap} from 'rxjs/operators';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
  }

  ngOnInit(): void {
    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null)
    // });
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.required, Validators.minLength(3), Validators.maxLength(15)],
      email: ['', [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: ['', Validators.required],
        numero: ['', Validators.required],
        complemento: ['', Validators.required],
        rua: ['', Validators.required],
        bairro: ['', Validators.required],
        cidade: ['', Validators.required],
        estado: ['', Validators.required]
      })
    });
  }

  onSubmit(): void {
    console.log(this.formulario);

    if (this.formulario.valid) {
      this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
        .subscribe(
          resonse => {
            console.log(resonse);
            this.formulario.reset();
          },
          error => console.log(error));
    } else {
      this.verificaValidacao(this.formulario);

    }
  }

  verificaValidacao(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((item, i) => {
      const controle = formGroup.get(item);
      controle.markAllAsTouched();
      if (controle instanceof FormGroup) {
        this.verificaValidacao(controle);
      }
    });
  }

  cssError(campo: string) {
    return {
      'has-error': this.verificaValidToTouched(campo),
      'has-feedback': this.verificaValidToTouched(campo)
    };
  }

  verificaValidToTouched(campo: string) {
    return this.formulario.get(campo).invalid && this.formulario.get(campo).touched;
  }

  verificaEmailValido() {
    const campoEmail = this.formulario.get('email');
    if (campoEmail.errors) {
      return campoEmail.errors['email'] && campoEmail.touched;
    }
  }

  consultaCep() {
    const cep = this.formulario.get('endereco.cep').value;
    const c = cep.replace(/\D/g, '');

    if (c !== null) {
      const validacep = /^[0-9]{8}$/;
      if (validacep.test(cep)) {
        this.resetaDadosForm();
        this.http.get(`https://viacep.com.br/ws/${c}/json`).subscribe(
          response => {
            console.log(response);
            this.popularDados(response);
          });
        // .map(value => value.json());
      }
    }

  }

  resetaDadosForm() {
    this.formulario.patchValue({
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

  popularDados(dados) {
    this.formulario.patchValue({
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


}
