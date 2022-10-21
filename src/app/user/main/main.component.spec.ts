import { ComponentFixture, TestBed } from '@angular/core/testing';

import { uMainComponent } from './main.component';

describe('MainComponent', () => {
  let component: uMainComponent;
  let fixture: ComponentFixture<uMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ uMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(uMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
