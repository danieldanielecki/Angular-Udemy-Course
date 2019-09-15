import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Snapshot is good for initialization data, for next data we need different approach.
    this.user = {
      id: this.route.snapshot.params['id'], // Get access to the ID in the URL.
      name: this.route.snapshot.params['name'] // Get access to the name in the URL.
    };
    // "params" is an Observable (feature by thirdy-party package, not by Angular, but have a used in Angular, which allow to easily works with asynchronous tasks).
    this.route.params
      .subscribe(
        // Used whenever parameters changes, so it will update 'id' and 'name' whenever these parameters change.
        (params: Params) => {
          this.user.id = params['id'];
          this.user.name = params['name'];
        }
      );
  }

}
