import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Data, Params, Router} from "@angular/router";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.data
      .subscribe(
        (data: Data) => {
          this.server = data['server'];
        }
      );

    // const id = +this.route.snapshot.params['id']; // Get ID, which is encoded in the URL, "+" makes sure that ID is threated as a number instead of string.
    // this.server = this.serversService.getServer(id); // Use the ID to get the server.
    //
    // // React to any changes.
    // this.route.params
    //   .subscribe(
    //     (params: Params) => {
    //       this.server = this.serversService.getServer(+params['id']); // Get new server, whenever params changed, "+" converts to number.
    //     }
    //   )
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'}); // Make relative path, "queryParamsHandling" is to handle query parameters.
  }
}
