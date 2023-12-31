import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentChildrenComponent } from './content-children.component';

describe('ContentChildrenComponent', () => {
  let component: ContentChildrenComponent;
  let fixture: ComponentFixture<ContentChildrenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentChildrenComponent]
    });
    fixture = TestBed.createComponent(ContentChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
