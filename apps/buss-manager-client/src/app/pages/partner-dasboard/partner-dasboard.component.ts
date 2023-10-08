import { Component, OnInit } from '@angular/core';
import { PartnerService } from '../partners/partner.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'bmw-partner-dasboard',
  templateUrl: './partner-dasboard.component.html',
  styleUrls: ['./partner-dasboard.component.scss'],
})
export class PartnerDasboardComponent implements OnInit {
  loggedUser: any = {};
  subscriptions: Subscription[] = [];

  constructor(private partnerService: PartnerService) {
    this.subscriptions.push(
      this.partnerService.partnerBuss$ubject.subscribe(bussinesses => {
        if (bussinesses) {
          this.loggedUser.bussiness = bussinesses;
        }
      })
    )
  }
  ngOnInit(): void {
    const userInMemory = localStorage.getItem('loggedUser') == null ? {} : localStorage.getItem('loggedUser');
    if (userInMemory) {
      this.loggedUser = JSON.parse(userInMemory.toString());
      this.loadPartnersBussinessess();
      console.log(this.loggedUser);
    }
    //localStorage.clear();
  }

  loadPartnersBussinessess() {
    this.partnerService.getPartnersBussinessess(this.loggedUser.partnerId);
  }




}
