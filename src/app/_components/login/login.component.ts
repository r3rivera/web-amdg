import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@/_service';


@Component({
  selector: 'r3app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(
    private authService : AuthenticationService
  ) { 

    console.log("Login Component...")

  }

  ngOnInit(): void {
  }

}
