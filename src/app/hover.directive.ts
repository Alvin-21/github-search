import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private elem: ElementRef) {}

  @HostListener('mouseover') onHover() {
    this.boxShadow("0 0 10px white");
  }

  @HostListener('mouseout') onMouseOut() {
    this.boxShadow("0 0 0");
  }

  private boxShadow(value: string) {
    this.elem.nativeElement.style.boxShadow = value;
  }
}
