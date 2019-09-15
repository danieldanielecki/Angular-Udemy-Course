import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Array of odd and even numbers.
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(firedNumber: number) {
    // console.log(firedNumber);

    if (firedNumber % 2 === 0) {
      // firedNumber is even number.
      this.evenNumbers.push(firedNumber);
    } else {
      // firedNumber is odd number.
      this.oddNumbers.push(firedNumber);
    }
  }
}
