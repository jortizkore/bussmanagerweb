import { Component, OnInit, inject } from '@angular/core';
import { Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Bussiness } from '../../shared/models/bussiness.model';
import { Router } from '@angular/router';

@Component({
  selector: 'bmw-bussiness-list-card',
  templateUrl: './bussiness-list-card.component.html',
  styleUrls: ['./bussiness-list-card.component.scss'],
})
export class BussinessListCardComponent implements OnInit {
  @Input() bussinessList: Bussiness[] = [];

  subscriptions: Subscription[] = [];
  selectedBussiness: Bussiness | null = null;

  // Services?
  private router = inject(Router);

  constructor() {
    //
  }
  ngOnInit(): void {
    console.log(this.bussinessList);
  }

  selectBussiness(bussiness: Bussiness) {
    sessionStorage.setItem('selectedBussiness', JSON.stringify(bussiness));
    //this.selectedBussiness = bussiness;
    this.router.navigate(['bussiness-dashboard']);
  }

}
