import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesTerceroComponent } from './detalles-tercero.component';

describe('DetallesTerceroComponent', () => {
  let component: DetallesTerceroComponent;
  let fixture: ComponentFixture<DetallesTerceroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesTerceroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesTerceroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
