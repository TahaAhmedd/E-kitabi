import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavparComponent } from './navpar.component';

describe('NavparComponent', () => {
  let component: NavparComponent;
  let fixture: ComponentFixture<NavparComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavparComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavparComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
