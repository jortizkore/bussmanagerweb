import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Bussiness } from '../../shared/models/bussiness.model';
import { BussinessService } from './bussiness.service';
import { BussinessColumns } from './bussiness-columns';

@Component({
  selector: 'bmw-bussiness',
  templateUrl: './bussiness.component.html',
  styleUrls: ['./bussiness.component.scss'],
})
export class BussinessComponent {

  subscriptions: Subscription[] = [];
  bussinessList: Bussiness[] = [];
  filteredResults: Bussiness[] = [];
  bussinessColumnDef: any[] = [];

  //searchParams
  name = '';
  rnc = '';
  status = true;

  constructor(private bussinessService: BussinessService) {
    this.bussinessColumnDef = BussinessColumns;

    bussinessService.getBussiness();

    this.subscriptions.push(
      bussinessService.bussiness$ubject.subscribe(res => {
        if (res) {
          this.bussinessList = res;
          this.filteredResults = this.bussinessList;
        }
      })
    );


  }
  search() {
    const haveSearchValues = this.name.trim().length > 0 || this.rnc.trim().length > 0;
    if (haveSearchValues) {
      this.filteredResults = this.bussinessList.filter(p => p.bussinessName.toLocaleLowerCase().includes(this.name.trim().length > 0 ? this.name.toLocaleLowerCase() : 'undefined')
        || p.RNC?.toLocaleLowerCase().includes(this.rnc.trim().length > 0 ? this.rnc.toLocaleLowerCase() : 'undefined'));

    } else {
      this.filteredResults = this.bussinessList;
    }
  }

  searchStatus(event: any) {
    this.filteredResults = this.bussinessList.filter(p => p.isActive === event);
  }

}
