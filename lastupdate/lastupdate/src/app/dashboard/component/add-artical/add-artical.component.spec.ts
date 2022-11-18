import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArticalComponent } from './add-artical.component';

describe('AddArticalComponent', () => {
  let component: AddArticalComponent;
  let fixture: ComponentFixture<AddArticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddArticalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddArticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
