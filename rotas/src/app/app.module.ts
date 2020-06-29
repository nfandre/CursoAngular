import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {CursosServiceService} from './cursos/cursos-service.service';
import {CursosModule} from './cursos/curso.module';
import {AlunosModule} from './alunos/alunos.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    CursosModule,
    AlunosModule,
    AppRoutingModule
  ],
  providers: [CursosServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
