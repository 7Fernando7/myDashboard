import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from '../../app.routes';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidemenu.component.html',
  styles: ``
})
export class SideMenuComponent {

  public menuItems = routes
      .map( route => route.children ?? [] )
      .flat()
      .filter( route => route && route.path )
      .filter( route => !route.path?.includes(':') );

  constructor() {

    // const dashboardRoutes = routes
    //   .map( route => route.children ?? [] )
    //   .flat()
    //   .filter( route => route && route.path )
    //   .filter( route => !route.path?.includes(':') )

    // console.log( dashboardRoutes );
  }

}
