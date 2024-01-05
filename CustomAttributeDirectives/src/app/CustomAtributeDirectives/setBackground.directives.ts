import { Directive, ElementRef, OnInit } from "@angular/core";


@Directive({
    selector:'[setbackground]'
})

export class setBackground implements OnInit{

    // private elements:ElementRef;

    constructor(private elements:ElementRef){
        // this.elements = elements;
    }
    ngOnInit(){
        this.elements.nativeElement.style.backgroundColor="gray";
        this.elements.nativeElement.style.color = 'white';
        this.elements.nativeElement.style.fontSize='18px'
    }

}