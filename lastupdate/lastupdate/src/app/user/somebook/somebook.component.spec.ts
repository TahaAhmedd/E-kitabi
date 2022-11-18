import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomebookComponent } from './somebook.component';

describe('SomebookComponent', () => {
  let component: SomebookComponent;
  let fixture: ComponentFixture<SomebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomebookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SomebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
