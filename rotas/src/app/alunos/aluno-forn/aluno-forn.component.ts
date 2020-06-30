import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AlunosService} from '../alunos.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-aluno-forn',
  templateUrl: './aluno-forn.component.html',
  styleUrls: ['./aluno-forn.component.css']
})
export class AlunoFornComponent implements OnInit {
  aluno: any;
  inscricao: Subscription;

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


}
