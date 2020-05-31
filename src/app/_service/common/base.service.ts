//import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppUser } from '@/_models';

export class BaseService {

  protected currentUserSubject: BehaviorSubject<AppUser>;
  public currentUser: Observable<AppUser>;

  constructor() { 
    this.currentUserSubject = new BehaviorSubject<AppUser>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  generateAuthorization(username : string, password : string) : string {
    let auth = btoa(`${username}:${password}`);
    return `Basic ${auth}`;
  }

  generateBasicAuthHeader(username : string, password : string) : HttpHeaders {
    let header = new HttpHeaders()
    .append("Authorization", this.generateAuthorization(username, password))
    return header;
  }

  getApiUrl() : string {
    return `${environment.apiHostUrl}${environment.apiBasePath}`;
  }


  public get currentUserValue(): AppUser {
      return this.currentUserSubject.value;
  }

  //Checks if the user has the role
  public hasAppRole(role : string) :boolean {
    if( this.currentUserSubject.value ) {
      let roles = this.currentUserSubject.value.roles;
      let value = roles.find(x => x === role);
      return (role === value);
    }
    return false;
  }


}
