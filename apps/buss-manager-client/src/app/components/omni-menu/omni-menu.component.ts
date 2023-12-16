import { Component, inject } from '@angular/core';
import { AuthService } from '../../shared/auth/auth.service';
import { Router } from '@angular/router';
import { adminRoutes } from './omni-menu-routes';

@Component({
  selector: 'bmw-omni-menu',
  templateUrl: './omni-menu.component.html',
  styleUrls: ['./omni-menu.component.scss'],
})
export class OmniMenuComponent {

  loginBtnText = 'Login';

  adminRoutes = adminRoutes;

  // Services
  authService = inject(AuthService);
  router = inject(Router);


  isUserLogged = () => {
    return this.authService.isUserLoggedIn;
  }

  logInBtnClicked() {
    if(this.isUserLogged()) {
      this.authService.logOut();
    }
    this.router.navigate(['login-page']);
  }

  getUserRoutes() {
    // depending on logged users roles will load a list of this user to access
  }

}
