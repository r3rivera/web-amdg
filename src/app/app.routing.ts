import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './_components/secured/dashboard/dashboard.component'
import { LoginComponent } from './_components/login/login.component';
import { RegisterComponent } from './_components/register/register.component';
import { AuthGuard } from '@/_service/utilities/auth.guard';
import { MainComponent } from './_components/main/main.component';
import { ManageAppointmentComponent } from '@/_components/secured/appointment';
import { MessageComponent } from './_components/secured/message';

const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'manageAppointment', component: ManageAppointmentComponent, canActivate: [AuthGuard]},
    { path: 'messages', component: MessageComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', component: MainComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const AppRoutingModule = RouterModule.forRoot(routes);