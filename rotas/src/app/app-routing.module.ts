import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './guards/auth-guard';
import {CursoGuard} from './guards/curso.guard';
import {AlunoGuard} from './guards/aluno.guard';


const routes: Routes = [
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/curso.module').then(m => m.CursosModule),
    canActivate: [AuthGuard],
    canActivateChild: [CursoGuard]
  },
  {
    path: 'alunos',
    loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule),
    canActivate: [AuthGuard],
    // canActivateChild: [AlunoGuard]
  },
  {path: 'login', component: LoginComponent},
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
