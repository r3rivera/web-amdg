import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AppUser } from '@/_models/app.user';
import { AuthenticationService } from '@/_service/auth/authentication.service';

@Component({
  selector: 'r3app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-amdg';

  currentUser: AppUser;

  constructor(
      private _router: Router,
      private _authService: AuthenticationService
  ) {
      this._authService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
      this._authService.logout();
      this._router.navigate(['/login']);
  }
}
