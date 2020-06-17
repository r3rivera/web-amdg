import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'r3app-response-content',
  templateUrl: './response.component.html'
})
export class ResponseComponent implements OnInit{

  @Input() name: string = "Hello";


  constructor(public activeModal: NgbActiveModal) {
    console.log("ResponseComponent.constructor() :" +name);
  }

  ngOnInit(): void {
    console.log("ResponseComponent.onInit() : :" +name);
  }
}


