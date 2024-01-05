import { AfterViewChecked, AfterViewInit, Component, ContentChild, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-comp',
  templateUrl: './main-comp.component.html',
  styleUrls: ['./main-comp.component.css']
})
export class MainCompComponent implements AfterViewInit, AfterViewChecked {

  inputValue:string[]=["Hello","Hi, Team"];
  
  onBtnClicked(inputEl:HTMLInputElement){
      this.inputValue.push(inputEl.value); 
  }
  constructor(){
    console.log("Main component constructor is called..");
    
  }
  ngAfterViewInit(): void {
      console.log("Main Component ngAfterViewInit hook is called.. ");  
  }
  ngAfterViewChecked(): void {
      console.log("Main Component ngAfterViewChecked hook is called.. ");
      
  }
  
  
}
