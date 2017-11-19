import { Injectable } from '@angular/core';
import {Transfer} from "../model/transfer";

@Injectable()
export class TransferService {
    private transfer: Transfer;

    constructor() { }

    setTransfer(transfer: Transfer) {
        this.transfer = transfer;
    }

    getTransfer() : Transfer {
        return this.transfer;
    }
}