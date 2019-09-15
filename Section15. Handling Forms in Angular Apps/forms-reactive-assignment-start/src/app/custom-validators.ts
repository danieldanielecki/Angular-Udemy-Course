import {FormControl} from "@angular/forms";
import {Observable} from "rxjs/Observable";

export class CustomValidators {
  static invalidProjectName(control: FormControl): {[s: string]: boolean} {
    if (control.value === 'Test') {
      return { 'invalidProjectName': true };
    }
    return null; // Project name is valid.
  }

  static asyncInvalidProjectName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'TestProject') {
          resolve({'invalidProjectName': true});
        } else {
          resolve(null); // Project name is valid.
        }
      }, 2000);
    });
    return promise;
  }
}