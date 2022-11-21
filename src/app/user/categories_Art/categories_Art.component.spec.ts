/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Categories_ArtComponent } from './categories_Art.component';

describe('Categories_ArtComponent', () => {
  let component: Categories_ArtComponent;
  let fixture: ComponentFixture<Categories_ArtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Categories_ArtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Categories_ArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
