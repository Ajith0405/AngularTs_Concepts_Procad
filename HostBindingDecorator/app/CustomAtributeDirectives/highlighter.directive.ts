import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  constructor(private element:ElementRef,private renderer:Renderer2) { }

  @HostListener('mouseenter') mouseEnter(){
    this.renderer.addClass(this.element.nativeElement,'highlight-product')
  }
  @HostListener('mouseleave') mouseOut(){
    this.renderer.removeClass(this.element.nativeElement,'highlight-product')
  }


}
