import {Subject} from "rxjs/Subject";

export class UsersService {
  userActivated = new Subject(); // "Subject()" is observer and observable in the same time.
}