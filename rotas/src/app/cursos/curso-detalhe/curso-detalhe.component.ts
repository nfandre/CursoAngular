import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {CursosServiceService} from '../cursos-service.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {

  id: number;
  inscricao: Subscription;
  curso: any;
  constructor(
    private router: ActivatedRoute,
    private cursosService: CursosServiceService,
    private route: Router
  ) {
    // this.id = this.router.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.inscricao = this.router.params.subscribe( (parametros: any) => {
      this.id = parametros['id'];
      this.curso = this.cursosService.gerCurso(this.id);
      if(this.curso == null){
        this.route.navigate(['/naoencontrado']);
      }
    });

  }
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
