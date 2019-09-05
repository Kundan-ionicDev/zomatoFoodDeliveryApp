import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboaringPage } from './onboaring.page';

describe('OnboaringPage', () => {
  let component: OnboaringPage;
  let fixture: ComponentFixture<OnboaringPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboaringPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboaringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
