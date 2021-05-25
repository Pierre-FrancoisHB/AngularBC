import { TestBed } from '@angular/core/testing';

import { ProfessionnalService } from './professionnal.service';

describe('ProfessionnalService', () => {
  let service: ProfessionnalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfessionnalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
