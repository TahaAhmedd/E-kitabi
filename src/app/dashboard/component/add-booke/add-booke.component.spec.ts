import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookeComponent } from './add-booke.component';

describe('AddBookeComponent', () => {
  let component: AddBookeComponent;
  let fixture: ComponentFixture<AddBookeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBookeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBookeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
