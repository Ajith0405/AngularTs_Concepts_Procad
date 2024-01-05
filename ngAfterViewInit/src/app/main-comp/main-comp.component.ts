import { Component, ContentChild, ElementRef, Input, ViewChild } from '@angular/core';
import { ChildCompComponent } from '../child-comp/child-comp.component';

@Component({
  selector: 'app-main-comp',
  templateUrl: './main-comp.component.html',
  styleUrls: ['./main-comp.component.css']
})
export class MainCompComponent {

  inputValue:string[]=["Hello","Hi, Team"];
  
  onBtnClicked(inputEl:HTMLInputElement){
      this.inputValue.push(inputEl.value);

      
  }

  
  ngOnInit(): void {
   
  }
}
