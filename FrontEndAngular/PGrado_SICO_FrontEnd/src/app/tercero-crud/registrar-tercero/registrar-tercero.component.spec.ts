import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarTerceroComponent } from './registrar-tercero.component';

describe('RegistrarTerceroComponent', () => {
  let component: RegistrarTerceroComponent;
  let fixture: ComponentFixture<RegistrarTerceroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarTerceroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarTerceroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
