import { Component, OnDestroy, OnInit } from '@angular/core';
import { PartnerService } from './partner.service';
import { Subscription } from 'rxjs';
import { Partner } from './partner.model';
import { PartnerColumns } from './partnerColumns'

@Component({
  selector: 'bmw-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss'],
})
export class PartnersComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  partners: Partner[] = [];
  filteredResults: Partner[] = [];
  partnersColumnDef: any[] = [];

  //filter variables
  name = '';
  idNumber = '';
  status = true;



  constructor(private partnerService: PartnerService) {

    this.partnersColumnDef = PartnerColumns;

    partnerService.getPartners();

    this.subscriptions.push(
      partnerService.partners$ubject.subscribe(res => {
        if (res) {
          this.partners = res;
          this.filteredResults = this.partners;
        }
      })
    );
  }

  search() {
    const haveSearchValues = this.name.trim().length > 0 || this.idNumber.trim().length > 0;
    if (haveSearchValues) {
      this.filteredResults = this.partners.filter(p => p.names.toLocaleLowerCase().includes(this.name.trim().length > 0 ? this.name.toLocaleLowerCase() : 'undefined')
        || p.idNumber.toLocaleLowerCase().includes(this.idNumber.trim().length > 0 ? this.idNumber.toLocaleLowerCase() : 'undefined'));

    } else {
      this.filteredResults = this.partners;
    }
  }

  searchStatus(event: any) {
    this.filteredResults = this.partners.filter(p => p.isActive === event);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
    //asd
  }

}
