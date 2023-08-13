import { Component, OnInit } from '@angular/core';
import { PartnerService } from '../partners/partner.service';

@Component({
  selector: 'bmw-partner-dasboard',
  templateUrl: './partner-dasboard.component.html',
  styleUrls: ['./partner-dasboard.component.scss'],
})
export class PartnerDasboardComponent implements OnInit {
  loggedUser: any = {};
  constructor(private partnerService: PartnerService) {

  }
  ngOnInit(): void {
    const userInMemory = localStorage.getItem('loggedUser') == null ? {} : localStorage.getItem('loggedUser');
    if (userInMemory) {
      this.loggedUser = JSON.parse(userInMemory.toString());
      console.log(this.loggedUser);
      this.loadPartnersBussinessess();
    }
    //localStorage.clear();
  }

  loadPartnersBussinessess() {
    this.partnerService.getPartnersBussinessess(this.loggedUser.partnerId);
  }




}
