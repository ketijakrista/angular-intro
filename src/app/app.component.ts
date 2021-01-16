import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mūsu pirmais appsis';
  description = 'This is the Basics';
  author = {
    name: 'Ketija',
    age: 26
  };
  inputDisabled = false;

  changeName() {
    this.author.name = 'Krista';
  }
}
