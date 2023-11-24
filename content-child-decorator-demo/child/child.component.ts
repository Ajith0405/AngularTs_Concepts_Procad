import { Component, ContentChild, ElementRef } from '@angular/core';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @ContentChild('para') paraEl:ElementRef;

  @ContentChild(TestComponent) testEl:TestComponent;

  stylePara(){
    console.log(this.paraEl.nativeElement);
    console.log(this.testEl.name);
  }
}
