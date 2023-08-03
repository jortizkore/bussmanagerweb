import { Component, OnInit } from '@angular/core';
import { LoginService } from './loginService';

@Component({
  selector: 'bmw-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  //Input properties
  userName = '';
  password = '';
  isAdmin = false;


  userImageUrl = '../../../assets/images/user-image-log-in.avif'
  loggedUser = {};
  // to set all app properties into a config file
  appName = 'Buss Manager';
  appVersion = '2.0';
  // 

  // *User properties
  selectedCompany: string | undefined | null = undefined;
  //

  constructor(private loginService: LoginService) {
    //this.selectedCompany = localStorage.getItem('selectedCompany');
    loginService.login$ubject.subscribe(res => {
      if (res) {
        this.loggedUser = res;
        console.log('this is the FE response login subject', res);
      }
    });
  }
  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
    //asd
  }

  logInUser(): void {
    const loginBody = {
      userName: this.userName,
      password: this.password,
      isAdmin: this.isAdmin
    }
    this.loginService.logInUser(loginBody);
  }
  setAdminStatus(status: any) {
    this.isAdmin = status.checked;
  }

}

