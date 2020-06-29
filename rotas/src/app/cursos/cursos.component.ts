import {Component, OnDestroy, OnInit} from '@angular/core';
import {CursosServiceService} from './cursos-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit, OnDestroy {
  pagina: number;
  cursos: any[];
  inscricao: Subscription;
  constructor(
    private cursosService: CursosServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
    this.inscricao = this.route.queryParams.subscribe( queryParams => {
      this.pagina = queryParams['pagina'];
    });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
  proximaPagina(): void {
    this.router.navigate(['/cursos'], { queryParams: {pagina: this.pagina++}});
  }


}
