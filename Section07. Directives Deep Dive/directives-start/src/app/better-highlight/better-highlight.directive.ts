import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent'; // Because of using @Input we can bind the property known as "property binding".
  @Input() highlightColor: string = 'blue'; // Because of using @Input we can bind the property known as "property binding".
  // @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent'; // Bind to property, which value will be important. Need to use camel case notation, because we are accessing DOM, which doesn't know dashes.
  // @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor; // Dynamic directive.
  @HostBinding('style.backgroundColor') backgroundColor: string; // Dynamic directive.

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // Good practice.
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue'); // Call Renderer2.
    this.backgroundColor = this.defaultColor; // Make default color to be workable fine from init the page.
  }

  // HostListener decorator for mouse over - making reactive directive.
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue'); // Call Renderer2.
    // this.backgroundColor = 'blue'; // Using HostBinding.
    this.backgroundColor = this.highlightColor; // Dynamic directive.
  }

  // HostListener decorator for mouse leave - making reactive directive.
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent'); // Call Renderer2.
    // this.backgroundColor = 'transparent'; // Using HostBinding.
    this.backgroundColor = this.defaultColor; // Dynamic directive.
  }
}
