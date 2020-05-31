import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './_components/login/login.component';
import { RegisterComponent } from './_components/register/register.component';
import { AlertComponent } from './_components/alert/alert.component';
import { DashboardComponent } from './_components/secured/dashboard/dashboard.component';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppointmentComponent } from './_components/secured/appointment/appointment.component';
import { TokenInterceptor } from './_interceptors/token.interceptor';
import { ErrorInterceptor } from './_interceptors/error.interceptor';


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
  providers: [
    { provide : HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide : HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
