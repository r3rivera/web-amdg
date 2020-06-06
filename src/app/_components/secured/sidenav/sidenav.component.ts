import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'r3app-sidenav',
  templateUrl: './sidenav.component.html'
})
export class SidenavComponent implements OnInit {

  constructor() { 
    console.log("SidenavComponent.onInit()");
  }

  ngOnInit(): void {
    console.log("SidenavComponent.onInit()");
  }

}
