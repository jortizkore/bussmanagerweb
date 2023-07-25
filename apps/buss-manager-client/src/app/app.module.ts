import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { BussinessComponent } from './pages/bussiness/bussiness.component';
import { MaterialModule } from './shared/material.module';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { OmniMenuComponent } from './components/omni-menu/omni-menu.component';
import { GenericTableComponent } from './components/generic-table/generic-table.component';
import { PartnerService } from './pages/partners/partner.service';
import { RegisterPartnerFormComponent } from './pages/partners/register-partner-form/register-partner-form.component';
import { RegisterBussinessFormComponent } from './pages/bussiness/register-bussiness-form/register-bussiness-form.component';
import {
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BussinessService } from './pages/bussiness/bussiness.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PartnersComponent,
    BussinessComponent,
    BussinessComponent,
    WelcomeComponent,
    OmniMenuComponent,
    GenericTableComponent,
    RegisterPartnerFormComponent,
    RegisterBussinessFormComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    BrowserAnimationsModule,
  ],
  providers: [PartnerService, BussinessService, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule { }
