import { TestBed } from '@angular/core/testing';

import { MyiwellService } from './myiwell.service';

describe('MyiwellService', () => {
  let service: MyiwellService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyiwellService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
