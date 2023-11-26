import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-on-changes-demo',
  templateUrl: './ng-on-changes-demo.component.html',
  styleUrls: ['./ng-on-changes-demo.component.css']
})
export class NgOnChangesDemoComponent {
  inputVal:string='';

  onBtnClicked(inputEl:HTMLInputElement){
      this.inputVal = inputEl.value;
  }
  
} 
