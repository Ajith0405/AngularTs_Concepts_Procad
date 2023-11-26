import { Component,ContentChildren, ElementRef, QueryList } from '@angular/core';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  //Html element reference
  @ContentChildren('para') paraElemnts:QueryList<ElementRef>;

  //component reference
  @ContentChildren(TestComponent) testcomps:QueryList<TestComponent>;

  show(){
    this.paraElemnts.forEach((el)=>{
        console.log(el.nativeElement);
        
    })
    this.testcomps.forEach((el)=>{
      console.log(el.name);
      
    })
  }

}
