import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 title = 'Login Page';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  sree: Sree = {
    id: 1,
    name: 'Windstormw'
  };

}
