import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from '../loginService';
import { UserLogin } from '../../../shared/models/userLogin.model';

@Component({
  selector: 'bmw-create-logins',
  templateUrl: './create-logins.component.html',
  styleUrls: ['./create-logins.component.scss'],
})
export class CreateLoginsComponent implements OnInit {

  @Input() currentUser: any = {};
  displaySaveBtn = false;

  user: UserLogin = {
    userName: '',
    userPassword: ''
  };

  userInfo: any = {
    name: '',
    isPartner: false,
    userId: ''
  }

  constructor(private loginService: LoginService) {
    // * load userInfo
  }
  ngOnInit(): void {
    console.log(this.currentUser);
    if (this.currentUser.createNew) {
      this.userInfo = {
        name: this.currentUser.names,
        isPartner: this.currentUser.isPartner,
        userId: this.currentUser.userId
      }
    } else {
      this.userInfo = {
        name: this.currentUser.names,
        isPartner: this.currentUser.isPartner,
        userId: this.currentUser.partnerId
      }
      this.user = this.currentUser;
      this.user.userId = this.currentUser.partnerId;

    }
  }

  shouldDisplaySaveBtn = (p1: string, p2: string) => {
    const result = p1.length > 0 && p2.length > 0 && this.user.userId === undefined;
    console.log(this.user.userId);
    console.log(result);
    this.displaySaveBtn = result;
  }

  save() {

    if (this.userInfo.isPartner)
      this.user.partnerId = this.userInfo.userId;
    else
      this.user.employeeId = this.userInfo.userId;

    this.loginService.createLoginUser(this.user);
  }

}
