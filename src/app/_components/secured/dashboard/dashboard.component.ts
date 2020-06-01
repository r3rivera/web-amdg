import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'r3app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log("Dashboard Component Destroy!");
    
  }

}
