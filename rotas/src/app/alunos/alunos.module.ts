import { NgModule } from '@angular/core';


import {AlunosComponent} from './alunos.component';
import {CommonModule} from '@angular/common';
import { AlunoFornComponent } from './aluno-forn/aluno-forn.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import {AlunosRoutingModule} from './alunos.routing.module';

@NgModule({
 imports: [
   CommonModule,
   AlunosRoutingModule
 ],
 exports: [],
 declarations: [
   AlunosComponent,
   AlunoFornComponent,
   AlunoDetalheComponent
 ],
 providers: [],
})
export class AlunosModule { }
