import { Component, OnDestroy, OnInit } from '@angular/core';
import { Bussiness } from '../bussiness.model';
import { BussinessService } from '../bussiness.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'bmw-register-bussiness-form',
  templateUrl: './register-bussiness-form.component.html',
  styleUrls: ['./register-bussiness-form.component.scss'],
})
export class RegisterBussinessFormComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];
  removeBussiness = false;
  bussiness: Bussiness = {
    bussinessName: '',
    phoneNumber: '',
    address: '',
    RNC: '',
    isActive: false,
    ownerId: '9b044f41-e711-4cf1-985e-419f103c5607',
  }
  constructor(private bussinessService: BussinessService, private router: Router) {
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
    const confirmation = confirm(confirmMessage);
    if (confirmation === true) {
      this.bussiness.isActive = !this.bussiness.isActive;
      this.bussinessService.updateBussiness(this.bussiness);
      this.bussiness.isActive ? alert('Bussiness activated') : alert('Bussiness deactivated');
      localStorage.removeItem('bussinessToDelete');
    } else {
      alert('No changes made');
      localStorage.removeItem('bussinessToDelete');
    }
    this.goToBussinessView();
  }

  goToBussinessView() {
    this.router.navigate(['bussiness']);
  }

}
