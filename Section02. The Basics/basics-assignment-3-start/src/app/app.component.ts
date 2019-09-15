import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayParagraph = false;
  paragraphText = '';
  paragraphs = [];

  onButtonClick() {
    if (this.displayParagraph === false) {
      this.displayParagraph = true;
      this.paragraphText = 'Secret Password - tuna';
      this.paragraphs.push(this.paragraphText);
    } else {
      this.displayParagraph = false;
      this.paragraphText = '';
    }
  }
}
