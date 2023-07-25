import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bmw-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  userImageUrl = '../../../assets/images/user-image-log-in.avif'

  // to set all app properties into a config file
  appName = 'Buss Manager';
  appVersion = '2.0';
  // 

  // *User properties
  selectedCompany: string | undefined | null = undefined;
  //

  constructor() {
    //this.selectedCompany = localStorage.getItem('selectedCompany');
  }
  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
    //asd
  }

}

