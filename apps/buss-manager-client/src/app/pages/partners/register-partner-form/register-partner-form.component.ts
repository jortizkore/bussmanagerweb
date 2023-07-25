import { Component, OnDestroy, OnInit } from '@angular/core';
import { Partner } from '../partner.model';
import { PartnerService } from '../partner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bmw-register-partner-form',
  templateUrl: './register-partner-form.component.html',
  styleUrls: ['./register-partner-form.component.scss'],
})
export class RegisterPartnerFormComponent implements OnInit, OnDestroy {

  deactivatePartner = false;
  partnerToCreate: Partner = {
    names: '',
    lastName: '',
    idNumber: '',
    phoneNumber: '',
    address: '',
    isActive: true,
  };

  constructor(private partnerService: PartnerService, private router: Router) {
    const update = localStorage.getItem('partnerToUpdate');
    let remove: any = {};
    this.deactivatePartner = localStorage.getItem('partnerToDelete') ? true : false;

    if (update) {
      this.partnerToCreate = JSON.parse(update);
    } else if (this.deactivatePartner) {
      remove = localStorage.getItem('partnerToDelete');
      this.partnerToCreate = JSON.parse(remove);
    }
  }
  ngOnDestroy(): void {
    localStorage.removeItem('partnerToDelete');
    localStorage.removeItem('partnerToUpdate');
    this.partnerToCreate = {
      names: '',
      lastName: '',
      idNumber: '',
      phoneNumber: '',
      address: '',
      isActive: true,
    };
  }

  ngOnInit(): void {
    if (this.deactivatePartner) {
      this.deactivate();
    }
  }

  deactivate() {
    const confirmMessage = this.partnerToCreate.isActive ? 'This partner will be deactivated' : 'This partner will be activate';
    const confirmation = confirm(confirmMessage);
    if (confirmation === true) {
      this.partnerToCreate.isActive = !this.partnerToCreate.isActive;
      this.partnerService.updatePartner(this.partnerToCreate);
      this.partnerToCreate.isActive ? alert('Partner activated') : alert('Partner deactivated');
      localStorage.removeItem('partnerToDelete');
    } else {
      alert('No changes made');
      localStorage.removeItem('partnerToDelete');
    }
    this.goToPartnerView();
  }

  goToPartnerView() {
    this.router.navigate(['partners']);
  }

  createPartner() {
    if (!this.partnerToCreate.id) {
      this.partnerService.createPartner(this.partnerToCreate);
    } else {
      this.partnerService.updatePartner(this.partnerToCreate);
      localStorage.removeItem('partnerToUpdate');

    }
    this.goToPartnerView();

  }

}
