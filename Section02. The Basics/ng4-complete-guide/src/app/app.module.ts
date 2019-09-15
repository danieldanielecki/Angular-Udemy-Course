import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';


// NgModule decorator.
@NgModule({
  // Components declarations.
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent
  ],
  // Add other modules.
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [], // TODO: Describe.
  bootstrap: [AppComponent] // List components, which should be booted.
})
export class AppModule { }
