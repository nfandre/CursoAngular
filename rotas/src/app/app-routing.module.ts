import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {CursosComponent} from './cursos/cursos.component';
import {LoginComponent} from './login/login.component';
import {CursoDetalheComponent} from './curso-detalhe/curso-detalhe.component';
import {CursoNaoEncotradoComponent} from './curso-nao-encotrado/curso-nao-encotrado.component';


const routes: Routes = [
  { path: 'cursos', component: CursosComponent},
  { path: 'curso/:id', component: CursoDetalheComponent},
  { path: 'naoencontrado', component: CursoNaoEncotradoComponent},
  { path: 'login', component: LoginComponent},
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
