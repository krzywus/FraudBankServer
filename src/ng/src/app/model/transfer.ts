export class Transfer {
    id?: number;
    recipient: string;
    account: string;
    amount: string;
    title: string;


    constructor(recipient: string, account: string, amount: string, title: string, id?:number) {
        this.id = id;
        this.recipient = recipient;
        this.account = account;
        this.amount = amount;
        this.title = title;
    }
}