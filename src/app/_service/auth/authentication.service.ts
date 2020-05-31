import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppUser } from '@/_models';
import { environment } from '../../../environments/environment';
import { BaseService } from '@/_service/common/base.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends BaseService{

  private currentUserSubject: BehaviorSubject<AppUser>;
  public currentUser: Observable<AppUser>;

  constructor(private _http: HttpClient) {
      super();
      console.log("AuthenticationService.constructor()")
      console.log(`AuthenticationService.constructor() :: ${environment.apiHostUrl}`)
      this.currentUserSubject = new BehaviorSubject<AppUser>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): AppUser {
      return this.currentUserSubject.value;
  }


  //Calls to authenticate the username with the password
  authenticateUser(username : string, password : string) {

    const url = `${environment.apiHostUrl}/users/authenticate`;
    console.log("AuthenticationService.login() :: " + url);

    const headerMap = this.generateBasicAuthHeader(username, password);
    return this._http.post<any>(url, {}, { headers: headerMap })
        .pipe(map(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
        }));
  }

  //Calls to logout the user and remove it from the local storage
  logout() {
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
  }

}
