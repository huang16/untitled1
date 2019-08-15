import { TestBed } from '@angular/core/testing';

import { NetdiskDetailService } from './netdisk-detail.service';

describe('NetdiskDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NetdiskDetailService = TestBed.get(NetdiskDetailService);
    expect(service).toBeTruthy();
  });
});
