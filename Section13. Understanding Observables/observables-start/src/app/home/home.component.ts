import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';
import {Observer} from "rxjs/Observer";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numbersObsSubscription: Subscription;
  customObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // Make my own first Observable.
    // "map()" - observable operator.
    const myNumbers = Observable.interval(1000)
      .map(
        (data: number) => {
          return data * 2;
        }
      ); // Automatically emit data every 1000 ms.
    this.numbersObsSubscription = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package'); // "next()" pushes next data package.
      }, 2000);
      setTimeout(() => {
        observer.next('second package'); // "next()" pushes next data package.
      }, 4000);
      setTimeout(() => {
        // observer.error('this does not work'); // "error()" - fail.
        observer.complete(); // After "complete()" nothing will occur, as it's completed.
      }, 5000);
      setTimeout(() => {
        // observer.error('this does not work'); // "error()" - fail.
        observer.next('third package'); // "next()" pushes next data package.
      }, 6000);
    });
    this.customObsSubscription = myObservable.subscribe(
      (data: string) => { console.log(data); },
      (error: string) => { console.log(error); },
      () => { console.log('completed'); }
    );
  }

  ngOnDestroy() {
    // Clean up observables, so avoid memory leak.
    this.numbersObsSubscription.unsubscribe();
    this.customObsSubscription.unsubscribe();
  }
}
