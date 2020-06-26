import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {

  id: string;
  inscricao: Subscription;
  constructor(private router: ActivatedRoute) {
    // this.id = this.router.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.inscricao = this.router.params.subscribe( (parametros: any) => {
      this.id = parametros['id'];
    });
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
