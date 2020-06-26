import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosServiceService {
  constructor() { }

  getCursos() {
    return [
      {id: 1, nome: 'angular'},
      {id: 2, nome: 'java'}
    ];
  }
  gerCurso(id: number) {
    // let cursos = this.getCursos();
    for (const c of this.getCursos()) {
      if (c.id == id) {
        return c;
      }
    }
  }
}
