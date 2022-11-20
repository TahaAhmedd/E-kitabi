import { TestBed } from '@angular/core/testing';

import { CatigotyBookService } from './catigoty-book.service';

describe('CatigotyBookService', () => {
  let service: CatigotyBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatigotyBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
