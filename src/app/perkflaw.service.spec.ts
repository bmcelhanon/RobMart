import { TestBed } from '@angular/core/testing';

import { PerkflawService } from './perkflaw.service';

describe('PerkflawService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PerkflawService = TestBed.get(PerkflawService);
    expect(service).toBeTruthy();
  });
});
