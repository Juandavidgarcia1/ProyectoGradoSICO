import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarBodegaComponent } from './actualizar-bodega.component';

describe('ActualizarBodegaComponent', () => {
  let component: ActualizarBodegaComponent;
  let fixture: ComponentFixture<ActualizarBodegaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarBodegaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarBodegaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
