import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component'),
    children: [
      {
        path: 'change-detection',
        title: 'Change detection',
        loadComponent: () => import('./dashboard/pages/change-detection/change-detection.component'),
      },
      {
        path: 'control-flow',
        title: 'Control flow',
        loadComponent: () => import('./dashboard/pages/control-flow/control-flow.component'),
      },
      {
        path: 'defer-options',
        title: 'Defer Options',
        loadComponent: () => import('./dashboard/pages/defer-options/defer-options.component'),
      },
      {
        path: 'defer-viwes',
        title: 'Defer Viwes',
        loadComponent: () => import('./dashboard/pages/defer-views/defer-views.component'),
      },
      {
        path: 'user/:id',
        title: 'User',
        loadComponent: () => import('./dashboard/pages/user/user.component'),
      },
      {
        path: 'users-list',
        title: 'Users List',
        loadComponent: () => import('./dashboard/pages/users/users.component'),
      },
      {
        path: 'view-transition',
        title: 'View Transition',
        loadComponent: () => import('./dashboard/pages/view-transition/view-transition.component'),
      },
      {
        path: '',
        redirectTo: 'control-flow', pathMatch: 'full',
      }
    ]
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  }
];
