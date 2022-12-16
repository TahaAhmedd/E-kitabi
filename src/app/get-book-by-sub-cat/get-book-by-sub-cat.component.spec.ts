import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBookBySubCatComponent } from './get-book-by-sub-cat.component';

describe('GetBookBySubCatComponent', () => {
  let component: GetBookBySubCatComponent;
  let fixture: ComponentFixture<GetBookBySubCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetBookBySubCatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetBookBySubCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
