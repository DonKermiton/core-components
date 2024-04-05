import { TestBed } from '@angular/core/testing';

import { CoreComponentsService } from './core-components.service';

describe('CoreComponentsService', () => {
  let service: CoreComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
