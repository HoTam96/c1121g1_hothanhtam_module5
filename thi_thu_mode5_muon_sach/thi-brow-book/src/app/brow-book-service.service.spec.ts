import { TestBed } from '@angular/core/testing';

import { BrowBookServiceService } from './brow-book-service.service';

describe('BrowBookServiceService', () => {
  let service: BrowBookServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrowBookServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
