import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import {CursosServiceService} from './cursos/cursos-service.service';
import { CursoNaoEncotradoComponent } from './curso-nao-encotrado/curso-nao-encotrado.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CursosComponent,
    LoginComponent,
    CursoDetalheComponent,
    CursoNaoEncotradoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CursosServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
