import { TestBed } from '@angular/core/testing';

import { GetPlanetInfoService } from './get-planet-info.service';

describe('GetPlanetInfoService', () => {
  let service: GetPlanetInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPlanetInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
