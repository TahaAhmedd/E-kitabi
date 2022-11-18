import { ComponentFixture, TestBed } from '@angular/core/testing';

import { dMainComponent } from './main.component';

describe('dMainComponent', () => {
  let component: dMainComponent;
  let fixture: ComponentFixture<dMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ dMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(dMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
