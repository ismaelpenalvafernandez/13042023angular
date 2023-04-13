import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calcular1Component } from './calcular1.component';

describe('Calcular1Component', () => {
  let component: Calcular1Component;
  let fixture: ComponentFixture<Calcular1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Calcular1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Calcular1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
