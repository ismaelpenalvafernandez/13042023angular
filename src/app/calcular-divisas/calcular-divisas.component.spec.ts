import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcularDivisasComponent } from './calcular-divisas.component';

describe('CalcularDivisasComponent', () => {
  let component: CalcularDivisasComponent;
  let fixture: ComponentFixture<CalcularDivisasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcularDivisasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcularDivisasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
