import {Injectable} from '@angular/core';
import {Aluno} from './aluno.model';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: Aluno[] = [
    {id: 1, nome: 'Aluno 01', email: 'aluno01@gmail.com'},
    {id: 2, nome: 'Aluno 02', email: 'aluno02@gmail.com'},
    {id: 3, nome: 'Aluno 03', email: 'aluno03@gmail.com'}
  ];

  constructor() {
  }

  getAlunos() {
    return this.alunos;
  }
  getAluno(id: number) {
    return this.getAlunos().find( aluno => aluno.id == id);
  }
}
