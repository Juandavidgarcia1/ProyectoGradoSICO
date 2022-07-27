import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTercerosComponent } from './lista-terceros.component';

describe('ListaTercerosComponent', () => {
  let component: ListaTercerosComponent;
  let fixture: ComponentFixture<ListaTercerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTercerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTercerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
