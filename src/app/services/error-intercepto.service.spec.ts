import { TestBed } from '@angular/core/testing';

import { ErrorInterceptoService } from './error-intercepto.service';

describe('ErrorInterceptoService', () => {
  let service: ErrorInterceptoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorInterceptoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
