import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadBookComponent } from './download-book.component';

describe('DownloadBookComponent', () => {
  let component: DownloadBookComponent;
  let fixture: ComponentFixture<DownloadBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
