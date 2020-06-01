import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '@/_service/auth';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertService } from '@/_service/utilities';

@Component({
  selector: 'r3app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
      private _formBuilder: FormBuilder,
      private _router: Router,
      private _authService: AuthenticationService,
      //private _userService: UserService,
      private _alertService: AlertService
  ) {
      // redirect to home if already logged in
      if (this._authService.currentUserValue) {
          this._router.navigate(['/']);
      }
  }

  ngOnInit() {

      this.registerForm = this._formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          username: ['', Validators.required],
          password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // reset alerts on submit
      this._alertService.clear();

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      this.loading = true;

      /*
      this._userService.register(this.registerForm.value)
          .pipe(first())
          .subscribe(
              data => {
                  //this._alertService.success('Registration successful', true);
                  this._router.navigate(['/login']);
              },
              error => {
                  this._alertService.error(error);
                  this.loading = false;
          });
          */

  }

}
