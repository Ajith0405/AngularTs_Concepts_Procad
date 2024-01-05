import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnChanges,OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit{
 
  @Input() message:String[]=[];

  @ContentChild('para') paraContentChild:ElementRef

  @ViewChild('msg') msgViewChild:ElementRef

  constructor(){
    console.log("Constructor is called..");
    
  }
  ngOnChanges(changes: SimpleChanges): void {
      console.log("OnChanges Hook is called..");   
  }
  ngOnInit(): void {
      console.log("ngOnint hook is called..");
  }
  ngDoCheck(): void {
      console.log("ngDocCheck hook is called...");   
  }
  ngAfterContentInit(): void {
      console.log("ngAfterContentInit Hook is called..");
  }
  ngAfterContentChecked(): void {
      console.log("ngAfterContentChecked Hook is called..");
      // console.log(this.paraContentChild.nativeElement);
      console.log("ngAfterContentCheck",this.msgViewChild); //ngAfterContentCheck undefined
      
  }
  ngAfterViewInit(): void {
      console.log("ngAfetrViewInit Hook is called...."); 
      console.log('ngAfetrViewInit Hook',this.msgViewChild); //ElementRef {nativeElement: h2}
  }



  

  
  

}
