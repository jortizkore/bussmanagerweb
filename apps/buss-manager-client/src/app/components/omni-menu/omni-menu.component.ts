import { Component, inject } from '@angular/core';
import { AuthService } from '../../shared/auth/auth.service';
import { Router } from '@angular/router';
import { adminRoutes } from './omni-menu-routes';
import { ModalService } from '../../shared/services/modal.service';
import { ProductTypesComponent } from '../product-types/product-types.component';

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
  sharedModal = inject(ModalService);


  isUserLogged = () => {
    return this.authService.isUserLoggedIn;
  }

  isAdmin = () => {
    return this.authService.isAdmin();
  }

  logInBtnClicked() {
    if (this.isUserLogged()) {
      this.authService.logOut();
    }
    this.router.navigate(['login-page']);
  }

  getUserRoutes() {
    // depending on logged users roles will load a list of this user to access
  }

  openProductTypeView() {
    this.sharedModal.openSharedModal('Product types', ProductTypesComponent, () => { alert('This is a test'); });
  }

}
