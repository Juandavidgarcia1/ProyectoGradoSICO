import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarTerceroComponent } from './actualizar-tercero.component';

describe('ActualizarTerceroComponent', () => {
  let component: ActualizarTerceroComponent;
  let fixture: ComponentFixture<ActualizarTerceroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarTerceroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarTerceroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
