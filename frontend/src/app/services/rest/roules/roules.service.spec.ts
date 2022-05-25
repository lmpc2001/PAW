import { TestBed } from '@angular/core/testing';

import { RoulesService } from './roules.service';

describe('RoulesService', () => {
  let service: RoulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
