import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'two-way-binding-html-component';
  fullName: string = "ankur israni";

  constructor() {
    setTimeout(() => {
      this.fullName = "software developer";
    }, 5000);
  }
}
