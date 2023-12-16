import { Component, OnInit } from '@angular/core';
import { LoginService } from './loginService';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth/auth.service';

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
  loggedUser: any = {};
  // to set all app properties into a config file
  appName = 'Buss Manager';
  appVersion = '2.0';
  // 

  // *User properties
  selectedCompany: string | undefined | null = undefined;
  //

  constructor(private loginService: LoginService, private router: Router, private authService: AuthService) {
    //this.selectedCompany = localStorage.getItem('selectedCompany');
    //TODO ADD subscriptions array
    loginService.login$ubject.subscribe(res => {
      if (res) {
        this.loggedUser = res;
        authService.addUserLogged(res);
        localStorage.setItem('loggedUser', JSON.stringify(res));
        if (this.loggedUser.isAdmin) {
          router.navigate(['admin-home']);
        } else if (this.loggedUser.partnerId) {
          router.navigate(['partner-home']);
        }
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

  setAdminStatus(adminCheck: any) {
    this.isAdmin = adminCheck.checked;
  }

}

