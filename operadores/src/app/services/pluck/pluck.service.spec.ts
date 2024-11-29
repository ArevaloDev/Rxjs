import { TestBed } from '@angular/core/testing';

import { PluckService } from './pluck.service';

describe('PluckService', () => {
  let service: PluckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PluckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
