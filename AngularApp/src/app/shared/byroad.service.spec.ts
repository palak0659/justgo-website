import { TestBed } from '@angular/core/testing';

import { ByroadService } from './byroad.service';

describe('ByroadService', () => {
  let service: ByroadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ByroadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
