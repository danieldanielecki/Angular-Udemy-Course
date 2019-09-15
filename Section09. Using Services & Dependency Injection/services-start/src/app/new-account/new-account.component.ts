import { Component, EventEmitter, Output } from '@angular/core';
import {LoggingService} from '../logging.service';
import {AccountsService} from '../accounts.service';
// import { LoggingService } from '../logging.service';

// Angular needs providers property here to spiecify, which service it requires.
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
  // providers: [LoggingService]
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  // Need to set type here, it's obligatory.
  // It'll inform Angular that we'll need instance of this LoggingService.
  constructor(private loggingService: LoggingService,
              private accountService: AccountsService) {
    this.accountService.statusUpdated.subscribe(
      (status: string) => alert('New Status: ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });

    // This use of service is wrong, although it works!
    // We shouldn't create instances manually.
    // const service = new LoggingService(); // Create service.
    // service.logStatusChange(accountStatus); // Call service method;
    // console.log('A server status changed, new status: ' + accountStatus);

    // Usage of injected service.
    this.accountService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}
