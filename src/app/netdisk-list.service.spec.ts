import { TestBed } from '@angular/core/testing';

import { NetdiskListService } from './netdisk-list.service';

describe('NetdiskListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NetdiskListService = TestBed.get(NetdiskListService);
    expect(service).toBeTruthy();
  });
});
