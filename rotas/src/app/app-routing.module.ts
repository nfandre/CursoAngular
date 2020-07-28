import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './guards/auth-guard';
import {CursoGuard} from './guards/curso.guard';
import {AlunoGuard} from './guards/aluno.guard';
import {PaginaNaoEncontradaComponent} from './pagina-nao-encontrada/pagina-nao-encontrada.component';


const routes: Routes = [
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/curso.module').then(m => m.CursosModule),
    canActivate: [AuthGuard],
    canActivateChild: [CursoGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'alunos',
    loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
    // canActivateChild: [AlunoGuard]
  },
  {path: 'login', component: LoginComponent},
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: PaginaNaoEncontradaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
