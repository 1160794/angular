import { TestBed } from '@angular/core/testing';

import { EncomendasService } from './encomendas.service';

describe('EncomendasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EncomendasService = TestBed.get(EncomendasService);
    expect(service).toBeTruthy();
  });
});
