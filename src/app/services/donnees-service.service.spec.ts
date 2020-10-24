import { TestBed } from '@angular/core/testing';

import { DonneesServiceService } from './donnees-service.service';

describe('DonneesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DonneesServiceService = TestBed.get(DonneesServiceService);
    expect(service).toBeTruthy();
  });
});
