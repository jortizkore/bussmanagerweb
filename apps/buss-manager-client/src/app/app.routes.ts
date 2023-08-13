import { Route } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { BussinessComponent } from './pages/bussiness/bussiness.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { RegisterPartnerFormComponent } from './pages/partners/register-partner-form/register-partner-form.component';
import { RegisterBussinessFormComponent } from './pages/bussiness/register-bussiness-form/register-bussiness-form.component';
import { CreateLoginsComponent } from './pages/login/create-logins/create-logins.component';
import { PartnerDasboardComponent } from './pages/partner-dasboard/partner-dasboard.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';

export const appRoutes: Route[] = [
    { path: '', title: 'Home', component: HomeComponent },
    { path: 'partner-home', title: 'Create user', component: PartnerDasboardComponent },
    { path: 'admin-home', title: 'Create user', component: AdminDashboardComponent },
    //
    { path: 'bussiness', title: 'Log in', component: BussinessComponent },
    { path: 'partners', title: 'Log in', component: PartnersComponent },
    { path: 'login-page', title: 'Log in', component: LoginComponent },
    { path: 'register-partner', title: 'Register as a partner!', component: RegisterPartnerFormComponent },
    { path: 'register-bussiness', title: 'Register a bussiness!', component: RegisterBussinessFormComponent },
    { path: 'register-login-user', title: 'Create user', component: CreateLoginsComponent },

];
