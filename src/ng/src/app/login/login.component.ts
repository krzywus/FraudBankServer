import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {

    constructor(private authService: AuthService,
                private router: Router) {}

    ngOnInit(): void {

    }

    login(username: string, password: string) {
        console.log('logging in');
        this.authService.login().toPromise()
                .then(
                    (isValid: boolean) => {
                        if (isValid) {
                            this.router.navigate(['/trform']);
                        } else{

                        }
                    }
                );
    }
}
