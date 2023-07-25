import { Component } from '@angular/core';

@Component({
  selector: 'bmw-omni-menu',
  templateUrl: './omni-menu.component.html',
  styleUrls: ['./omni-menu.component.scss'],
})
export class OmniMenuComponent {

  routesToDisplay = [{
    title: 'My Bussiness',
    route: 'bussiness'
  },
  {
    title: 'View partners',
    route: 'partners'
  }
  ];


  getUserRoutes() {
    // depending on logged users roles will load a list of this user to access
  }

}
