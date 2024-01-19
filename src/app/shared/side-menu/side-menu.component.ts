import { Component } from '@angular/core';
import { routes } from '../../app.routes';

@Component({
  standalone: true,
  selector: 'app-side-menu',
  imports: [],
  templateUrl: './side-menu.component.html',
  styles: ``
})
export class SideMenuComponent {

  constructor() {

    public menuItems = routes
      .map( route => route.children ?? [] )
      .flat()
      .filter( route => route && route.path )
      .filter( route => !route.path?.includes(':') );

    // const dashboardRoutes = routes
    //   .map( route => route.children ?? [] )
    //   .flat()
    //   .filter( route => route && route.path )
    //   .filter( route => !route.path?.includes(':') )

    // console.log( dashboardRoutes );
  }

}
