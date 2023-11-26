import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-on-init-demo',
  templateUrl: './on-init-demo.component.html',
  styleUrls: ['./on-init-demo.component.css']
})
export class OnInitDemoComponent implements OnChanges,OnInit {
  @Input() message:string[]=[];
  @ViewChild('temp') tempPara:ElementRef

  constructor(){
    console.log('Demo component constructor is called');
    
  }
  ngOnChanges(changes: SimpleChanges) {
        console.log('ngOnChanges hook called');
        
  }
  ngOnInit(){
    console.log('ngOnIt hook called');
    // console.log(this.tempPara.nativeElement);
    
  }
}
