// Typically you have 1 shared module in the app.
import {NgModule} from '@angular/core';
import {DropdownDirective} from './dropdown.directive';
import {CommonModule} from '@angular/common';

// In declarations we're writing what we want to share, we can declare module only, but also at least once.
// In exports we're writing what we want to import somewhere else, otherwise it'll be not accesible (if we'll not export).
@NgModule({
  declarations: [
    DropdownDirective
  ],
  exports: [
    CommonModule,
    DropdownDirective
  ]
})
export class SharedModule {

}