import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { LoginService } from '../../Login/service/login.service';


export const authGuard: CanActivateFn = (route, state) => {

  const loginService = inject(LoginService);
  const router = inject(Router);

  return loginService.isAauthenticated()
  ? true
  : router.createUrlTree(['/login']);
};
