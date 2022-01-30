import { TestBed } from '@angular/core/testing';

import { ExploreSpaceService } from './explore-space.service';

describe('ExploreSpaceService', () => {
  let service: ExploreSpaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExploreSpaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
