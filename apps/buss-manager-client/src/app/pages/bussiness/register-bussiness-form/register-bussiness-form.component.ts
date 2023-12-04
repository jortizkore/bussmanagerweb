import { ChangeDetectorRef, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Bussiness } from '../../../shared/models/bussiness.model';
import { BussinessService } from '../bussiness.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/auth/auth.service';
import { NotificationService } from '../../../shared/services/notification.service';

@Component({
  selector: 'bmw-register-bussiness-form',
  templateUrl: './register-bussiness-form.component.html',
  styleUrls: ['./register-bussiness-form.component.scss'],
})
export class RegisterBussinessFormComponent implements OnInit, OnDestroy {

  // Services
  authService = inject(AuthService);
  notificationService = inject(NotificationService);
  bussinessService = inject(BussinessService);

  subscriptions: Subscription[] = [];
  removeBussiness = false;
  bussiness: Bussiness = {
    bussinessName: '',
    phoneNumber: '',
    address: '',
    RNC: '',
    isActive: false,
    ownerId: this.authService.loggedUser?.partnerId,
  }
  constructor(private router: Router) {
    const update = localStorage.getItem('bussinessToUpdate');
    let remove: any = {};
    this.removeBussiness = localStorage.getItem('bussinessToDelete') ? true : false;

    if (update) {
      this.bussiness = JSON.parse(update);
    } else if (this.removeBussiness) {
      remove = localStorage.getItem('bussinessToDelete');
      this.bussiness = JSON.parse(remove);
      this.removeBussiness = true;
    }
  }
  ngOnDestroy(): void {
    this.cleanLocalStorage();
  }
  ngOnInit(): void {
    if (this.removeBussiness) {
      this.deactivate();
    }
  }

  cleanLocalStorage() {
    localStorage.removeItem('bussinessToUpdate');
    localStorage.removeItem('bussinessToDelete');
  }

  createBussiness() {
    // todo crear validacion de campos
    if (!this.bussiness.id) {
      this.bussinessService.createBussiness(this.bussiness);
    } else {
      this.bussinessService.updateBussiness(this.bussiness);
    }
    this.goToBussinessView();
  }

  deactivate() {
    const confirmMessage = this.bussiness.isActive ? 'This bussiness will be deactivated' : 'This bussiness will be activate';
    this.notificationService.showQuestion('Confirm action', confirmMessage, () => {
      this.bussiness.isActive = !this.bussiness.isActive;
      this.bussinessService.updateBussiness(this.bussiness);
      this.bussiness.isActive ? this.notificationService.showInfoMessage('Done', 'Bussiness activated') : this.notificationService.showInfoMessage('Done', 'Bussiness deactivated');
      localStorage.removeItem('bussinessToDelete');
      localStorage.removeItem('bussinessToDelete');
      this.goToBussinessView();
    });
  }

  goToBussinessView() {
    this.router.navigate(['bussiness']);
  }

}
