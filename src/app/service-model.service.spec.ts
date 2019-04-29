import { TestBed } from '@angular/core/testing';

import { ServiceModelService } from './service-model.service';

describe('ServiceModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceModelService = TestBed.get(ServiceModelService);
    expect(service).toBeTruthy();
  });
});
