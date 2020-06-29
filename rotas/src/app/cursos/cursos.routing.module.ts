import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CursosComponent} from './cursos.component';
import {CursoDetalheComponent} from './curso-detalhe/curso-detalhe.component';
import {CursoNaoEncotradoComponent} from './curso-nao-encotrado/curso-nao-encotrado.component';




const cursosRoutes: Routes = [
  { path: 'cursos', component: CursosComponent},
  { path: 'curso/:id', component: CursoDetalheComponent},
  { path: 'naoencontrado', component: CursoNaoEncotradoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(cursosRoutes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
