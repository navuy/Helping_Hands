import { TestBed } from '@angular/core/testing';

import { NodeUtilityService } from './node-utility.service';

describe('NodeUtilityService', () => {
  let service: NodeUtilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NodeUtilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
