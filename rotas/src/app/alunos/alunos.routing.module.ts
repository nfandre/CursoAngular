import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AlunosComponent} from './alunos.component';
import {AlunoDetalheComponent} from './aluno-detalhe/aluno-detalhe.component';
import {AlunoFornComponent} from './aluno-forn/aluno-forn.component';
import {AlunoGuard} from '../guards/aluno.guard';


const alunosRoutes: Routes = [
  {
    path: '', component: AlunosComponent,
    canActivateChild: [AlunoGuard],
    children: [
      {path: 'novo', component: AlunoFornComponent},
      {path: ':id', component: AlunoDetalheComponent},
      {path: ':id/editar', component: AlunoFornComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule {
}
