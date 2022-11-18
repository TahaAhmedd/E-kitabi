import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbooksComponent } from './newbooks.component';

describe('NewbooksComponent', () => {
  let component: NewbooksComponent;
  let fixture: ComponentFixture<NewbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewbooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
