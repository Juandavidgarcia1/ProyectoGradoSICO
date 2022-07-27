import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarBodegaComponent } from './registrar-bodega.component';

describe('RegistrarBodegaComponent', () => {
  let component: RegistrarBodegaComponent;
  let fixture: ComponentFixture<RegistrarBodegaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarBodegaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarBodegaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
