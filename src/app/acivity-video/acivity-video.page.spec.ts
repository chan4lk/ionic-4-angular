import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcivityVideoPage } from './acivity-video.page';

describe('AcivityVideoPage', () => {
  let component: AcivityVideoPage;
  let fixture: ComponentFixture<AcivityVideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcivityVideoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcivityVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
