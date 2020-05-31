import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './_components/login/login.component';
import { RegisterComponent } from './_components/register/register.component';
import { AlertComponent } from './_components/alert/alert.component';
import { DashboardComponent } from './_components/secured/dashboard/dashboard.component';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { AppointmentComponent } from './_components/secured/appointment/appointment.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    DashboardComponent,
    AppointmentComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
