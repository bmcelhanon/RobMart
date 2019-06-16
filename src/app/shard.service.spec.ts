import { TestBed } from '@angular/core/testing';

import { ShardService } from './shard.service';

describe('ShardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShardService = TestBed.get(ShardService);
    expect(service).toBeTruthy();
  });
});
