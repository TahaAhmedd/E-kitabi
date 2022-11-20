import { TestBed } from '@angular/core/testing';

import { ArticleCategoryService } from './article-category.service';

describe('ArticleCategoryService', () => {
  let service: ArticleCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
