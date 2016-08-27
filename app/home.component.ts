import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <h2>Home</h2> 
  <p>{{message}}</p>
  `
})
export class HomeComponent { 
  message = "this is a message for the home.";
}