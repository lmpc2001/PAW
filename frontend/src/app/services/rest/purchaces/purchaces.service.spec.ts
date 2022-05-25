import { TestBed } from '@angular/core/testing';

import { PurchacesService } from './purchaces.service';

describe('PurchacesService', () => {
  let service: PurchacesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurchacesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
