import {EventEmitter, Injectable} from "@angular/core";
import {LogService} from "../shared/log.service";

@Injectable()
export class CursosService {

  emitirCursoCriado = new EventEmitter<string>();

  static criouNovoCurso = new EventEmitter<string>();

  cursos: string[] = ['mat', 'pt', 'java', 'typescript'];
  constructor(private logService: LogService) {
    console.log('cursoService');
  }

  getCursos() {
    this.logService.consoleLog('Obtendo lista de cursos')
    return this.cursos;
  }
  addCurso(curso: string): void {
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
    this.logService.consoleLog(`Criando o novo curso: ${curso}`);
  }
}
