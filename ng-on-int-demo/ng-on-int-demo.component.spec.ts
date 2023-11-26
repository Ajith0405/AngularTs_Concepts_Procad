import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOnIntDemoComponent } from './ng-on-int-demo.component';

describe('NgOnIntDemoComponent', () => {
  let component: NgOnIntDemoComponent;
  let fixture: ComponentFixture<NgOnIntDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgOnIntDemoComponent]
    });
    fixture = TestBed.createComponent(NgOnIntDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
