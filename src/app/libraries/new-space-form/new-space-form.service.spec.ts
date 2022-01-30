import { TestBed } from '@angular/core/testing';

import { NewSpaceFormService } from './new-space-form.service';

describe('NewSpaceFormService', () => {
  let service: NewSpaceFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewSpaceFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
