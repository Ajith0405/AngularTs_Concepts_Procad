import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-viwe-chiildren-demo',
  templateUrl: './viwe-chiildren-demo.component.html',
  styleUrls: ['./viwe-chiildren-demo.component.css']
})
export class ViweChiildrenDemoComponent {

  fullName:string='';
  @ViewChildren('inputEl',{}) inputElements: QueryList< ElementRef>;

  inputSubmit(){
    let name='';
    this.inputElements.forEach((el)=>{
      name += el.nativeElement.value + ' ';    
    })
    this.fullName = name.trim();
    
  }
}
