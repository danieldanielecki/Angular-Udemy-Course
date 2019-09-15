import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/Rx'
import {Observable} from "rxjs/Observable";

@Injectable()
export class ServerService {
  constructor(private http: Http) {}

  storeServers(servers: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'}); // Optional.

    // Ending with ".json" is important, because this is Firebase specific.
    // return this.http.post('https://udemy-ng-http-77e14.firebaseio.com/data.json', servers, {headers: headers});
    return this.http.put('https://udemy-ng-http-77e14.firebaseio.com/data.json', servers, {headers: headers});
  }
  getServers() {
    return this.http.get('https://udemy-ng-http-77e14.firebaseio.com/data')

      // Wrap data into transformable data and finally into an observable.
      .map(
        (response: Response) => {
          const data = response.json();

          // Demo purposes.
          for (const server of data) {
            server.name = 'FETCHED_' + server.name;
          }

          return data;
        }
      )
      // Catch errors
      .catch(
        (error: Response) => {
          // console.log(error);
          // return Observable.throw(error); // Throw the error.
          return Observable.throw('Something went wrong'); // Throw the error.
        }
      );
  }
  getAppName() {
    return this.http.get('https://udemy-ng-http-77e14.firebaseio.com/appName.json')
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }
}
