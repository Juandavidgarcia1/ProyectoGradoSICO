import { TestBed } from '@angular/core/testing';

import { ExistenciaService } from './existencia.service';

describe('ExistenciaService', () => {
  let service: ExistenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExistenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
