import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[Hover]'
})
export class HoverDirective {

  constructor(private element:ElementRef,private renderer:Renderer2) { }

  @HostBinding('style.backgroundColor') backgroundColor:string ="white";
  @HostBinding('style.padding') padding:string ="5px 10px";
  @HostBinding('style.color') color:string ="black";
  @HostBinding('style.border') border:string ="5px solid gray";

  @HostListener('mouseenter') mouseEnter(){
    this.backgroundColor = 'yellow'
    this.border ='5px solid red'
    this.color ='red';
  }

  @HostListener('mouseleave') mouseLeave(){
    this.backgroundColor = 'white'
    this.border ='5px solid gray'
    this.color ='black';
  }

}
