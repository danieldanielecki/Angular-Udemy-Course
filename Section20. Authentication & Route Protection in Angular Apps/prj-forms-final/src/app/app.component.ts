import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCDbD_0Z0BY4UE2s9nyYRcs4WQwK1ObGlQ",
      authDomain: "ng-recipe-book-1a5ac.firebaseapp.com",
      databaseURL: "https://ng-recipe-book-1a5ac.firebaseio.com",
      projectId: "ng-recipe-book-1a5ac",
      storageBucket: "ng-recipe-book-1a5ac.appspot.com",
      messagingSenderId: "982891092994"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
