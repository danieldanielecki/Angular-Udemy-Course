import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  // It's still a property, it's just a setter of property, which is a method, which is get executed whenever the property changes.
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      // Opposite of ngIf.
      this.vcRef.createEmbeddedView(this.templateRef); // Create view in this View Container, here is the template (reference to the template).
    } else {
      this.vcRef.clear(); // Remove everything from this place in the DOM.
    }
  }

  // Just like elementRef, it gives access element directive template.
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
