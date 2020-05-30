import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs'
import { AlertService } from '@/_service/utilities/alert.service';

@Component({ selector: 'r3app-alert', templateUrl: './alert.component.html'})
export class AlertComponent implements OnInit {


  private subscription : Subscription
  private message : any;

  constructor(private alertService : AlertService) { }

  ngOnInit() {
    /*
    this.subscription = this.alertService.getAlert()
        .subscribe(message => {
            switch (message && message.type) {
                case 'success':
                    message.cssClass = 'alert alert-success';
                    break;
                case 'error':
                    message.cssClass = 'alert alert-danger';
                    break;
            }

            this.message = message;
        });
        */
}

ngOnDestroy() {
    this.subscription.unsubscribe();
}

}
