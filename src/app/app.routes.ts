import { Routes } from '@angular/router';

import { authGuard } from './pages/@core/guards/auth.guard';


export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'login',
    loadChildren: () => import('./pages/Login/login.routes').then(m => m.LOGIN_ROUTES)
  },
  {path: 'home',
    loadChildren: () => import('./pages/Home/home.routes').then(m => m.HOME_ROUTES),
    canActivate: [authGuard]
  }
];
