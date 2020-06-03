import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivNgswitchComponent } from './diretiv-ngswitch.component';

describe('DiretivNgswitchComponent', () => {
  let component: DiretivNgswitchComponent;
  let fixture: ComponentFixture<DiretivNgswitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiretivNgswitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivNgswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
