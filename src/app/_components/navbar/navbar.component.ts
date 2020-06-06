import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'r3app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { 
    console.log("NavbarComponent.constructor()");
  }
    

  ngOnInit(): void {
    console.log("NavbarComponent.onInit()");
  }

}
