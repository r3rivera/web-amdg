import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './_components/secured/dashboard/dashboard.component'
import { LoginComponent } from './_components/login/login.component';
import { RegisterComponent } from './_components/register/register.component';
import { AuthGuard } from '@/_service/utilities/auth.guard';

const routes: Routes = [
    { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const AppRoutingModule = RouterModule.forRoot(routes);