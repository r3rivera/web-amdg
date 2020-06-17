import { Component, OnInit } from '@angular/core';
import { InboxMessage } from '@/_models';
import { AlertService } from '@/_service/utilities';
import { InboxService } from '@/_service/message';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ResponseComponent } from '@/_components/secured/message/response';

@Component({
  selector: 'r3app-inbox',
  templateUrl: './inbox.component.html'
})
export class InboxComponent implements OnInit {

  inboxMessageResult : InboxMessage[];

  constructor(
    private _alertService: AlertService,
    private _inboxService: InboxService,
    private _modalService: NgbModal
  ){
    this.inboxMessageResult = new Array();
    console.info("Inbox::Contructor()");
  }

  ngOnInit(): void {
    console.info("Inbox::ngOnInit()");

    this._inboxService.getMessageInbox().subscribe(
      (result:InboxResult) => {
        this.inboxMessageResult = result.data;
        console.log(this.inboxMessageResult);
        console.log("Found messages!");
      },
      error => {
        console.error(error);

        this.inboxMessageResult = new Array();
        this._alertService.error({
          code:'2345',
          message: 'Unable to get messages!',
          type: 'error'
        });
      }
    );

  }


  openMessage(messageId: string){
    console.log("Opening modal dialog");
    const modalRef = this._modalService.open(ResponseComponent,{
      centered: true,
      size: 'lg'
    });
    modalRef.componentInstance.name = messageId;
  }
  

}

//Specific for this component
interface InboxResult{
  status: number;
  data?: InboxMessage[];
}