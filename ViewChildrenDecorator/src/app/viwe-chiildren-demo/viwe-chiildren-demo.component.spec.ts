import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViweChiildrenDemoComponent } from './viwe-chiildren-demo.component';

describe('ViweChiildrenDemoComponent', () => {
  let component: ViweChiildrenDemoComponent;
  let fixture: ComponentFixture<ViweChiildrenDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViweChiildrenDemoComponent]
    });
    fixture = TestBed.createComponent(ViweChiildrenDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
