import { TestBed } from '@angular/core/testing';

import { RegiServService } from './regi-serv.service';

describe('RegiServService', () => {
  let service: RegiServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegiServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
