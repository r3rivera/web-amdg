import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@/_service/auth';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '@/_service/utilities/alert.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'r3app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private _formBuilder: FormBuilder,
        private _route: ActivatedRoute,
        private _router: Router,
        private _authenticationService: AuthenticationService,
        private _alertService: AlertService
    ) {
        // redirect to home if already logged in
        if (this._authenticationService.currentUserValue) {
            this._router.navigate(['/']);
        }
    }



  ngOnInit(): void {

    this.loginForm = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    // get return url from route parameters or default to '/'
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
  }

    // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }


  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this._alertService.clear();

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    this._authenticationService.login(this.f.username.value, this.f.password.value)
        .pipe(first())
        .subscribe(
            data => {
                this._router.navigate([this.returnUrl]);
            },
            error => {
                this._alertService.error(error);
                this.loading = false;
            });
  }
}
