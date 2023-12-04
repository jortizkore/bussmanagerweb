import { Component, inject } from '@angular/core';
import { BussinessService } from '../bussiness/bussiness.service';
import { AuthService } from '../../shared/auth/auth.service';
import { NotificationService } from '../../shared/services/notification.service';
import { Bussiness } from '../../shared/models/bussiness.model';
import { Router } from '@angular/router';
import { bussinessSideNavRoutes } from './bussiness-sidenav-menu';

@Component({
  selector: 'bmw-bussiness-dashboard',
  templateUrl: './bussiness-dashboard.component.html',
  styleUrls: ['./bussiness-dashboard.component.scss'],
})
export class BussinessDashboardComponent {

  // Services
  bussinessService = inject(BussinessService);
  authService = inject(AuthService);
  notificationService = inject(NotificationService);

  // General variables
  selectedBussiness: any;
  bussinessMenuItems = bussinessSideNavRoutes;

  constructor(private router: Router) {
    this.authService.verifyLoggedUser();
    this.verifySelectedBussiness();
  }

  private verifySelectedBussiness() {
    const selected = sessionStorage.getItem('selectedBussiness');
    if (selected)
      this.selectedBussiness = JSON.parse(selected);

    if (this.selectedBussiness === null) {
      this.notificationService.showAlertMessage('No bussiness selected', 'Select a bussiness to access this view');
      this.router.navigate(['']);;
    }
  }



}
