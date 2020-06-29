import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoFornComponent } from './aluno-forn.component';

describe('AlunoFornComponent', () => {
  let component: AlunoFornComponent;
  let fixture: ComponentFixture<AlunoFornComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoFornComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoFornComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
