import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private ele:ElementRef) { }
  @HostListener('mouseover')
  high(){
    this.ele.nativeElement.style.backgroundColor="red";
  }
  @HostListener('mouseout')
  high1(){
    this.ele.nativeElement.style.backgroundColor="#0e3bee";
  }

}
