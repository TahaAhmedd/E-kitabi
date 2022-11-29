import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCeseComponent } from './test-cese.component';

describe('TestCeseComponent', () => {
  let component: TestCeseComponent;
  let fixture: ComponentFixture<TestCeseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCeseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestCeseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
