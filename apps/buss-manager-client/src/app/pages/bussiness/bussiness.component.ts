import { Component, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { Bussiness } from '../../shared/models/bussiness.model';
import { BussinessService } from './bussiness.service';
import { BussinessColumns } from './bussiness-columns';
import { AuthService } from '../../shared/auth/auth.service';
import { NotificationService } from '../../shared/services/notification.service';

@Component({
  selector: 'bmw-bussiness',
  templateUrl: './bussiness.component.html',
  styleUrls: ['./bussiness.component.scss'],
})
export class BussinessComponent implements OnInit {

  subscriptions: Subscription[] = [];
  bussinessList: Bussiness[] = [];
  filteredResults: Bussiness[] = [];
  bussinessColumnDef: any[] = [];

  //searchParams
  name = '';
  rnc = '';
  status = true;

  //services
  authService = inject(AuthService);
  bussinessService = inject(BussinessService);
  notificationService = inject(NotificationService);

  constructor() {
    this.bussinessColumnDef = BussinessColumns;

    this.bussinessService.getBussiness();

    this.subscriptions.push(
      this.bussinessService.bussiness$ubject.subscribe(res => {
        if (res) {
          this.bussinessList = res;
          this.filteredResults = this.bussinessList;
        }
      })
    );
  }

  ngOnInit(): void {
    this.authService.verifyLoggedUser();
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
