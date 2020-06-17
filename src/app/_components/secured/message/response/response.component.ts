import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { InboxMessageDetails } from '@/_models';

@Component({
  selector: 'r3app-response-content',
  templateUrl: './response.component.html'
})
export class ResponseComponent implements OnInit{

  @Input() contentDetails: InboxMessageDetails;


  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}


  sendResponse(){
    console.log("Sending the response... ");
  }
}


