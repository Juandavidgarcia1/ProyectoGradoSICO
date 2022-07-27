import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesBodegaComponent } from './detalles-bodega.component';

describe('DetallesBodegaComponent', () => {
  let component: DetallesBodegaComponent;
  let fixture: ComponentFixture<DetallesBodegaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesBodegaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesBodegaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
