import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs'
import { AlertService } from '@/_service/utilities/alert.service';
import { AppAlert } from '@/_models';

@Component({ selector: 'r3app-alert', templateUrl: './alert.component.html'})
export class AlertComponent implements OnInit {

  private subscription : Subscription
  appAlert : AppAlert;

  constructor(private alertService : AlertService) { }

  ngOnInit() {
    console.log("AlertComponent.ngOnInit() :: START");
    this.subscription = this.alertService.getAlert()
        .subscribe(msgAlert => {
          console.log(`AlertComponent resp 1 :: ${JSON.stringify(msgAlert)}`);
            switch (msgAlert && msgAlert.type) {
                case 'success':
                    msgAlert.style = 'alert alert-success';
                    break;
                case 'error':
                    msgAlert.style = 'alert alert-danger';
                    break;
        }
    
        this.appAlert = msgAlert;
        console.log(`AlertComponent resp 2 :: ${JSON.stringify(this.appAlert)}`);
    });
    console.log("AlertComponent.ngOnInit() :: END");
  } 

  ngOnDestroy() {
        this.subscription.unsubscribe();
  }

}
