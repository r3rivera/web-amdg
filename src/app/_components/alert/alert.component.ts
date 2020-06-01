import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { AlertService } from '@/_service/utilities/alert.service';
import { AppAlert } from '@/_models';

@Component({ selector: 'r3app-alert', templateUrl: './alert.component.html' })
export class AlertComponent implements OnInit {
  private subscription: Subscription;
  appAlert: AppAlert;

  constructor(private alertService: AlertService) {}

  ngOnInit() {
    this.subscription = this.alertService.getAlert().subscribe((msgAlert) => {
      switch (msgAlert && msgAlert.type) {
        case 'success':
          msgAlert.style = 'alert alert-success';
          break;
        case 'error':
          msgAlert.style = 'alert alert-danger';
          break;
      }

      this.appAlert = msgAlert;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
