import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnChanges,OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{
 
  @Input() message:String[]=[];

  @ContentChild('para') paraContentChild:ElementRef

  @ViewChild('head') headViewChild:ElementRef

  @ViewChildren('msg') msgViewChildren:QueryList<ElementRef>;

  constructor(){
    console.log("Child Component Constructor is called..");
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
      // console.log("ngAfterContentCheck",this.headViewChild); //ngAfterContentCheck undefined
      
  }
  ngAfterViewInit(): void {
      console.log("ngAfetrViewInit Hook is called...."); 
      // console.log('ngAfetrViewInit Hook',this.headViewChild); //ElementRef {nativeElement: h2}
  }

  ngAfterViewChecked(): void {
      console.log("ngAfterViewChecked hook is called...");
      console.log(this.headViewChild.nativeElement);
      console.log(this.msgViewChildren);
      
  }



  

  
  

}
