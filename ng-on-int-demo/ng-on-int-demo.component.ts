import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-on-int-demo',
  templateUrl: './ng-on-int-demo.component.html',
  styleUrls: ['./ng-on-int-demo.component.css']
})
export class NgOnIntDemoComponent {
  inputValue:string[]=["Hello","Hi, Team"];

  onBtnClicked(inputEl:HTMLInputElement){
      this.inputValue.push(inputEl.value);
  }

  
}
