import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './_components/secured/dashboard/dashboard.component'
import { LoginComponent } from './_components/login/login.component';
import { RegisterComponent } from './_components/register/register.component';
import { AuthGuard } from '@/_service/utilities/auth.guard';
import { MainComponent } from './_components/main/main.component';
import { ManageAppointmentComponent } from '@/_components/secured/appointment';
import { MessageComponent, InboxComponent } from '@/_components/secured/message';
import { SearchComponent } from '@/_components/secured/search/search.component';

const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], children:[
        { path: 'search-user', component: SearchComponent, canActivate: [AuthGuard]},
        { path: 'manage-appointment', component: ManageAppointmentComponent, canActivate: [AuthGuard]},
        { path: 'manage-inbox', component: InboxComponent, canActivate: [AuthGuard]},
    ] },
    
    { path: 'messages', component: MessageComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', component: MainComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const AppRoutingModule = RouterModule.forRoot(routes);