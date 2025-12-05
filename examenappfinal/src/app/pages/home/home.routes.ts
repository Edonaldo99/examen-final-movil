import { Routes } from '@angular/router';

export const HOME_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home.page').then(m => m.HomePage)
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('../profile/profile.page').then(m => m.ProfilePage)
  }
];
