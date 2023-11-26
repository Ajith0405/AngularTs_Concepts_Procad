import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOnChangesDemoComponent } from './ng-on-changes-demo.component';

describe('NgOnChangesDemoComponent', () => {
  let component: NgOnChangesDemoComponent;
  let fixture: ComponentFixture<NgOnChangesDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgOnChangesDemoComponent]
    });
    fixture = TestBed.createComponent(NgOnChangesDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
