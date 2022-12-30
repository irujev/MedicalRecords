import { TestBed } from '@angular/core/testing';

import { VisitationService } from './visitation.service';

describe('VisitationService', () => {
  let service: VisitationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
