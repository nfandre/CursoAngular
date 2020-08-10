import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDebubComponent } from './form-debub.component';

describe('FormDebubComponent', () => {
  let component: FormDebubComponent;
  let fixture: ComponentFixture<FormDebubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDebubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDebubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
