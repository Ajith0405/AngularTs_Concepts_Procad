import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStyleAttributeDirectiveComponent } from './ng-style-attribute-directive.component';

describe('NgStyleAttributeDirectiveComponent', () => {
  let component: NgStyleAttributeDirectiveComponent;
  let fixture: ComponentFixture<NgStyleAttributeDirectiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgStyleAttributeDirectiveComponent]
    });
    fixture = TestBed.createComponent(NgStyleAttributeDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
