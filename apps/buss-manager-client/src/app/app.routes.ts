import { Route } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { BussinessComponent } from './pages/bussiness/bussiness.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { RegisterPartnerFormComponent } from './pages/partners/register-partner-form/register-partner-form.component';
import { RegisterBussinessFormComponent } from './pages/bussiness/register-bussiness-form/register-bussiness-form.component';

export const appRoutes: Route[] = [
    { path: '', title: 'Home', component: HomeComponent },
    { path: 'bussiness', title: 'Log in', component: BussinessComponent },
    { path: 'partners', title: 'Log in', component: PartnersComponent },
    { path: 'login-page', title: 'Log in', component: LoginComponent },
    { path: 'register-partner', title: 'Register as a partner!', component: RegisterPartnerFormComponent },
    { path: 'register-bussiness', title: 'Register a bussiness!', component: RegisterBussinessFormComponent },

];
