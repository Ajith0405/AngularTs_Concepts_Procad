import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnInitDemoComponent } from './on-init-demo.component';

describe('OnInitDemoComponent', () => {
  let component: OnInitDemoComponent;
  let fixture: ComponentFixture<OnInitDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnInitDemoComponent]
    });
    fixture = TestBed.createComponent(OnInitDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
