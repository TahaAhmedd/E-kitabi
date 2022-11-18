import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBookeComponent } from './list-booke.component';

describe('ListBookeComponent', () => {
  let component: ListBookeComponent;
  let fixture: ComponentFixture<ListBookeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBookeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBookeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
