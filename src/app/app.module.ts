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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './_components/main/main.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { SidenavComponent } from './_components/secured/sidenav/sidenav.component';
import { SearchComponent } from './_components/secured/search/search.component';
import { UserprofileComponent } from './_components/secured/userprofile/userprofile.component';
import { ManageAppointmentComponent } from './_components/secured/appointment/manage-appointment/manage-appointment.component';
import { MessageComponent } from './_components/secured/message/message.component';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    DashboardComponent,
    AppointmentComponent,
    MainComponent,
    NavbarComponent,
    SidenavComponent,
    SearchComponent,
    UserprofileComponent,
    ManageAppointmentComponent,
    MessageComponent
  ],
  providers: [
    { provide : HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide : HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
