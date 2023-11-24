import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentChildDecoratorDemoComponent } from './content-child-decorator-demo.component';

describe('ContentChildDecoratorDemoComponent', () => {
  let component: ContentChildDecoratorDemoComponent;
  let fixture: ComponentFixture<ContentChildDecoratorDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentChildDecoratorDemoComponent]
    });
    fixture = TestBed.createComponent(ContentChildDecoratorDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
