import { Component } from '@angular/core';
import { AuthService } from '../../shared/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bmw-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  loggedUser: any;
  constructor(private router: Router) {
    this.loggedUser = AuthService.getLoggedUser();

    if (AuthService.loggedUser?.isAdmin)
      router.navigate(['/admin-home']);

    if (AuthService.loggedUser?.partnerId)
      router.navigate(['partner-home']);
  }
}
