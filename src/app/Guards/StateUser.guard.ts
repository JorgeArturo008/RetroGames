import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServicesService } from '../Services/auth-services.service';

@Injectable({
  providedIn: 'root',
})
export class StateUser implements CanActivate {
  constructor(private auth: AuthServicesService, private router: Router) {}

  async canActivate(): Promise<boolean | UrlTree> {
    const result = await this.estado();
    if (result) {
      return true;
    } else {
      // Redirigir al usuario a la página de inicio de sesión o a otra página
      return this.router.createUrlTree(['/login']);
    }
  }

  estado(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.auth.stateUser().subscribe((res) => {
        if (res) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }

}

