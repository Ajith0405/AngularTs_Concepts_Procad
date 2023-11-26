import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoOnChange1Component } from './demo-on-change1.component';

describe('DemoOnChange1Component', () => {
  let component: DemoOnChange1Component;
  let fixture: ComponentFixture<DemoOnChange1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoOnChange1Component]
    });
    fixture = TestBed.createComponent(DemoOnChange1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
