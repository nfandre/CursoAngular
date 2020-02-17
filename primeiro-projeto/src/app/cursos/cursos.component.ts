import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;

  cursos: string[] = ['java', 'html', 'css'];

  constructor() {
    this.nomePortal = 'http:/loiane.training';
  }

  ngOnInit(): void {
  }

}
