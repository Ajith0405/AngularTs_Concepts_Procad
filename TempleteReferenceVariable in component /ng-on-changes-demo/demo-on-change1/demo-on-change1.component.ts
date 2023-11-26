import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo-on-change1',
  templateUrl: './demo-on-change1.component.html',
  styleUrls: ['./demo-on-change1.component.css']
})
export class DemoOnChange1Component implements OnChanges {
  @Input() message:string;
 

  constructor(){
    console.log('Demo 1 component constructor called');
    console.log(this.message);
  }

  ngOnChanges(changes:SimpleChanges){
    console.log('ngOnChanges is called');
    console.log(changes);
    // this.previousMessage = changes['message'].previousValue;

  }

}
