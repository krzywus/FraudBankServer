import {Component} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.css' ]
})
export class LoginComponent {

    constructor(private authService: AuthService,
                private router: Router) {}

    login(username: string, password: string) {
        this.authService.login(username, password)
            .then(
                (isValid: boolean) => {
                        if (isValid) {
                            this.navigate();
                        } else {
                            this.router.navigate(['/login']);
                        }
                    }
                );
    }

    navigate() {
        if (this.authService.isAdminLoggedIn) {
            this.router.navigate(['/admin']);
        } else {
            this.router.navigate(['/trform']);
        }
    }
}
