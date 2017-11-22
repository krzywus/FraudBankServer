import { Component }          from '@angular/core';
import {AuthService} from "./services/auth.service";

@Component({
    selector: 'app-root',
    template: `
    <h1>{{title}}</h1>
    <nav>
        <a routerLink="/trform" routerLinkActive="active" style="margin:1%">
            New transfer</a>
        <a routerLink="/history" routerLinkActive="active">
            History</a>
        <a *ngIf="authService.isAdminLoggedIn" routerLink="/admin" routerLinkActive="active">
            Admin</a>
    </nav>
    <router-outlet></router-outlet>
  `,
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private authService: AuthService){

    }

    title = "BKL4";
}
