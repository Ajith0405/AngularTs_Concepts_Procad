import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";


@Directive({
    selector:'[setbackground]'
})

export class setBackground implements OnInit{

    // private elements:ElementRef;

    constructor(private elements:ElementRef, private renderer:Renderer2){
        // this.elements = elements;
    }
    ngOnInit(){
        // this.elements.nativeElement.style.backgroundColor="gray";
        // this.elements.nativeElement.style.color = 'white';
        // this.elements.nativeElement.style.fontSize='18px'
        this.renderer.setStyle(this.elements.nativeElement,'backgroundColor',"gray");
        this.renderer.setStyle(this.elements.nativeElement,'color',"white");
        this.renderer.setStyle(this.elements.nativeElement,'fontSize',"18px");
    }

}