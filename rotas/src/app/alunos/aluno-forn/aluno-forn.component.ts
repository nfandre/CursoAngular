import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AlunosService} from '../alunos.service';
import {Subscription} from 'rxjs';
import {IformCandeactivate} from '../../guards/iform-candeactivate';

@Component({
  selector: 'app-aluno-forn',
  templateUrl: './aluno-forn.component.html',
  styleUrls: ['./aluno-forn.component.css']
})
export class AlunoFornComponent implements OnInit, IformCandeactivate {
  aluno: any;
  inscricao: Subscription;
  private formMudou: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) {
  }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(params => {
      let id = params['id'];
      this.aluno = this.alunosService.getAluno(id);

      if (this.aluno === null) {
        this.aluno = {};
      }
    });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  onInput() {
    this.formMudou = true;
  }


  teste = function() {
    if (this.formMudou) {
      confirm('Tem certeza que deseja sair dessa página?');
    }
    return true;
  };

  podeDesativar() {
    this.teste();
  }


}
