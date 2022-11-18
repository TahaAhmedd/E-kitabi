import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccontingComponent } from './acconting.component';

describe('AccontingComponent', () => {
  let component: AccontingComponent;
  let fixture: ComponentFixture<AccontingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccontingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccontingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
