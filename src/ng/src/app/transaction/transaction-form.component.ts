import {Component} from '@angular/core';
import {Headers, Http, Response} from "@angular/http";
import {Transfer} from "../model/transfer";

@Component({
    selector: 'transaction-form',
    templateUrl: './transaction-form.component.html',
    styleUrls: [ './transaction-form.component.css' ]
})
export class TransactionFormComponent {

    private returnedTransfer: Transfer;

    private updateHeaders =
        new Headers({'Content-Type': 'application/json'});
    private url = 'http://localhost:8080/transfer';

    constructor(private http: Http) {}

    send(recipient: string, accountFake: string,
         account: string, amount: string, title: string) {
        let transfer = new Transfer(recipient, account, amount, title);
        let options = {headers: this.updateHeaders};
        this.http.post(this.url, transfer, options)
            .toPromise()
            .then((response: Response) => this.getTransfer(response))
            .then((retTransfer: Transfer) => {
                console.log(retTransfer);
                this.returnedTransfer = retTransfer as Transfer;
                console.log(this.returnedTransfer);
            })
            .catch(this.handleError);
    }

    private getTransfer(response: Response) : Promise<Transfer> {
        return this.http.get(this.url + "/id?id=" + response.json())
            .toPromise()
            .then((response: Response) => response.json())
            .catch(this.handleError);
    }

    private handleError (error: Response | any) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    }
}
