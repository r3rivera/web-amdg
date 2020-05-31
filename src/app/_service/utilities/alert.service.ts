import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { AppAlert } from '@/_models';

@Injectable({providedIn: 'root'})
export class AlertService {

  private subject = new Subject<AppAlert>();
  private keepAfterRouteChange = false;

  constructor(private router: Router) {
      // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
      this.router.events.subscribe(event => {
          if (event instanceof NavigationStart) {
              if (this.keepAfterRouteChange) {
                  // only keep for a single route change
                  this.keepAfterRouteChange = false;
              } else {
                  // clear alert message
                  this.clear();
              }
          }
      });
  }

  getAlert(): Observable<AppAlert> {
    return this.subject.asObservable();
  }

  success(message: AppAlert, keepAfterRouteChange = false) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next(message);
  }

  error(message: AppAlert, keepAfterRouteChange = false) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next(message);
  }

  clear() {
      // clear by calling subject.next() without parameters
      this.subject.next();
  }
}
