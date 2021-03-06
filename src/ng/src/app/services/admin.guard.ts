import { Injectable }       from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot, CanActivateChild
} from '@angular/router';
import { AuthService }      from './auth.service';
import {Observable} from "rxjs/Observable";

@Injectable()
export class AdminGuard implements CanActivate, CanActivateChild {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;
        console.log(url);

        return this.checkLogin(url);
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot,
                     state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.canActivate(childRoute, state);
    }

    checkLogin(url: string): boolean {
        if (this.authService.isAdminLoggedIn) { return true; }

        this.authService.redirectUrl = url;

        this.router.navigate(['/login']);
        return false;
    }
}