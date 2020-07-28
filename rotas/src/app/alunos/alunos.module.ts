import {NgModule} from '@angular/core';


import {AlunosComponent} from './alunos.component';
import {CommonModule} from '@angular/common';
import {AlunoFornComponent} from './aluno-forn/aluno-forn.component';
import {AlunoDetalheComponent} from './aluno-detalhe/aluno-detalhe.component';
import {AlunosRoutingModule} from './alunos.routing.module';
import {AlunosService} from './alunos.service';
import {FormsModule} from '@angular/forms';
import {AlunoDeactivateGuard} from '../guards/aluno-deactivate.guard';
import {AlunoDetalheResolve} from './guards/aluno-detalhe.resolve';

@NgModule({
  imports: [
    CommonModule,
    AlunosRoutingModule,
    FormsModule
  ],
  exports: [],
  declarations: [
    AlunosComponent,
    AlunoFornComponent,
    AlunoDetalheComponent
  ],
  providers: [
    AlunosService,
    AlunoDeactivateGuard,
    AlunoDetalheResolve
  ],
})
export class AlunosModule {
}
