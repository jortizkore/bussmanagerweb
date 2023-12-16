import { Component, inject } from '@angular/core';
import { AuthService } from '../../shared/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bmw-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  loggedUser: any;
  authService = inject(AuthService)
  constructor(private router: Router) {
    this.loggedUser = this.authService.getLoggedUser();

    if (this.authService.loggedUser?.isAdmin)
      router.navigate(['/admin-home']);

    if (this.authService.loggedUser?.partnerId)
      router.navigate(['partner-home']);
  }
}
