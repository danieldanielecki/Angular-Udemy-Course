import {Directive, ElementRef, OnInit} from '@angular/core';

// Create custom directive.
@Directive({
  selector: '[appBasicHighlight]' // Directives mostly are using camel case notation. [] makes it recognize when will be used in HTML without [], ie. "appBasicHighlight" will work.
})
export class BasicHighlightDirective implements OnInit {
  // Must be elementRef for custom directive.
  constructor(private elementRef: ElementRef) {}

  // Directive unlike like Component doesn't has a View and a Template, so not all lifecycle hooks would be there, but OnInit works.
  // Bad practice, better to use Renderer.
  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green'; // Get access to element and style it.
  }
}