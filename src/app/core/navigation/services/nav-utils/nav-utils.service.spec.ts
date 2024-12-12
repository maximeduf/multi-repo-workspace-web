import { TestBed } from '@angular/core/testing';

import { NavUtilsService } from './nav-utils.service';

describe('NavUtilsService', () => {
  let service: NavUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
