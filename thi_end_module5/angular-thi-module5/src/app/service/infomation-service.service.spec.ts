import { TestBed } from '@angular/core/testing';

import { InfomationServiceService } from './infomation-service.service';

describe('InfomationServiceService', () => {
  let service: InfomationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfomationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
