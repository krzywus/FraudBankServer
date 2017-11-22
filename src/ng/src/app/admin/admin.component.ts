import {Component} from '@angular/core';
import {Http, Headers, Response} from "@angular/http";
import {Transfer} from "../model/transfer";
import {AuthService} from "../services/auth.service";

@Component({
    selector: 'admin',
    templateUrl: './admin.component.html',
    styleUrls: [ './admin.component.css' ]
})
export class AdminComponent {
    transactions: Transfer[];

    private updateHeaders =
        new Headers({'Content-Type': 'application/json'});
    private url = 'http://localhost:8080/transfer/admin';
    constructor(private http: Http,
                private authService: AuthService) {
        this.fetchData();
    }

    fetchData(){
        this.http.get(this.url + '/all')
            .toPromise()
            .then(response => response.json() as Transfer[])
            .then((transactions: Transfer[]) =>
                this.transactions = transactions)
            .catch(this.handleError);
    }

    accept(transfer : Transfer) {
        let options = {headers: this.updateHeaders};
        let url = this.url + '/accept'; 
        this.http.post(url, transfer, options)
            .toPromise()
            .then(() => this.fetchData())
            .catch(this.handleError);
    }


    private handleError (error: Response | any) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    }
}
