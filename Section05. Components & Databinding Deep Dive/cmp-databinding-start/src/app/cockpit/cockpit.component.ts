import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // @Output - decorator to listen my custom events.
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>(); // Emmiter is an object in Angular that allows to emmit my own events.

  // Listening to custom properties.
  // @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>(); // Emmiter is an object in Angular that allows to emmit my own events.
  // Listening to custom properties through alias.
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>(); // Emmiter is an object in Angular that allows to emmit my own events.
  // newServerName = '';
  // newServerContent = '';

  @ViewChild('serverContentInput') serverContentInput: ElementRef; // Get access to local reference.

  constructor() { }

  // Lifecycle hook.
  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    // console.log(nameInput);
    // console.log(nameInput.value);
    // console.log(this.serverContentInput);

    // Emit event of a new type.
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    // Emit event of a new type.
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
