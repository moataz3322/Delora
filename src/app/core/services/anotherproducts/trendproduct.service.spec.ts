import { TestBed } from '@angular/core/testing';

import { TrendproductService } from './trendproduct.service';

describe('TrendproductService', () => {
  let service: TrendproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrendproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
