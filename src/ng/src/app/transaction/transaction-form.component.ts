import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'transaction-form',
    templateUrl: './transaction-form.component.html',
    styleUrls: [ './transaction-form.component.css' ]
})
export class TransactionFormComponent implements OnInit {

    constructor() {}

    ngOnInit(): void {

    }

    send(recipient: string, account: string,
         amount: string, title: string) {
        
    }
}
