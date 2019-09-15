// Angular imports.
import {Component} from '@angular/core';

// Decorator.
@Component({
  selector: 'app-server', // Unique HTML tag, which must be declared to use this compontent.
  templateUrl: './server.component.html', // Point to external HTML file of component template.
  styleUrls : ['./server.component.css']
})

// Class.
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor () {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}