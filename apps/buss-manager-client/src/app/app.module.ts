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
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BussinessService } from './pages/bussiness/bussiness.service';
import { LoginService } from './pages/login/loginService';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { PartnerDasboardComponent } from './pages/partner-dasboard/partner-dasboard.component';
import { CreateLoginsComponent } from './pages/login/create-logins/create-logins.component';
import { EmployeesComponent } from './maintenance/employees/employees.component';
import { RolesComponent } from './maintenance/roles/roles.component';
import { WarehouseComponent } from './maintenance/warehouse/warehouse.component';
import { InventoryComponent } from './maintenance/Inventory/inventory.component';
import { SellsComponent } from './pages/sells/sells.component';
import { PurchasesComponent } from './pages/purchases/purchases.component';
import { DepartmentsComponent } from './maintenance/departments/departments.component';
import { AdminComponent } from './maintenance/admin/admin.component';
import { BussinessListCardComponent } from './components/bussiness-list-card/bussiness-list-card.component';
import { AuthService } from './shared/auth/auth.service';

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
    AdminDashboardComponent,
    PartnerDasboardComponent,
    CreateLoginsComponent,
    EmployeesComponent,
    RolesComponent,
    WarehouseComponent,
    InventoryComponent,
    SellsComponent,
    PurchasesComponent,
    DepartmentsComponent,
    AdminComponent,
    BussinessListCardComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    BrowserAnimationsModule,
  ],
  providers: [PartnerService, BussinessService, HttpClient, LoginService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule { }
