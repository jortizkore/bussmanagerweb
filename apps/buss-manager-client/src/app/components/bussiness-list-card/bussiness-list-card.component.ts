import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Bussiness } from '../../shared/models/bussiness.model';

@Component({
  selector: 'bmw-bussiness-list-card',
  templateUrl: './bussiness-list-card.component.html',
  styleUrls: ['./bussiness-list-card.component.scss'],
})
export class BussinessListCardComponent implements OnInit {
  @Input() bussinessList: Bussiness[] = [];

  subscriptions: Subscription[] = [];
  constructor() {
    //
  }
  ngOnInit(): void {
    console.log(this.bussinessList);
  }


}
