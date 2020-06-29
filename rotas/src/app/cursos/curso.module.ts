import { NgModule } from '@angular/core';
import {CursosComponent} from './cursos.component';
import {CursoDetalheComponent} from './curso-detalhe/curso-detalhe.component';
import {CursoNaoEncotradoComponent} from './curso-nao-encotrado/curso-nao-encotrado.component';
import {CursosServiceService} from './cursos-service.service';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CursosRoutingModule} from './cursos.routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CursosRoutingModule
  ],
 exports: [],
 declarations: [
   CursosComponent,
   CursoDetalheComponent,
   CursoNaoEncotradoComponent
 ],
 providers: [CursosServiceService],
})
export class CursosModule { }


