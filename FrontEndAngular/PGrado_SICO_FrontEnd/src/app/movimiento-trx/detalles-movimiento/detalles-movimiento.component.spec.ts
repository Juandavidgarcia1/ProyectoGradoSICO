import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesMovimientoComponent } from './detalles-movimiento.component';

describe('DetallesMovimientoComponent', () => {
  let component: DetallesMovimientoComponent;
  let fixture: ComponentFixture<DetallesMovimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesMovimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesMovimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
