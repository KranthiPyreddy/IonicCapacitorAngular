import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
email: string = "";
password: string = "";
  signIn() {
    alert("You entered the email: " + this.email + ", and the password: " + this.password);
    }
  constructor() {}

}
