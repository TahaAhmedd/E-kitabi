import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookeCategoryComponent } from './booke-category.component';

describe('BookeCategoryComponent', () => {
  let component: BookeCategoryComponent;
  let fixture: ComponentFixture<BookeCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookeCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookeCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
