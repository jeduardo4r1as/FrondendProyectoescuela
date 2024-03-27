import { TestBed } from '@angular/core/testing';

import { AnoelectivoService } from './anoelectivo.service';

describe('AnoelectivoService', () => {
  let service: AnoelectivoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnoelectivoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
