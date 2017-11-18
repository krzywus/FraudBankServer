import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LoginComponent} from "./login/login.component";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import {HistoryComponent} from "./history/history.component";
import {TransactionResultComponent} from "./transaction/transaction-result.component";
import {TransactionVerificationComponent} from "./transaction/transaction-verification.component";
import {TransactionFormComponent} from "./transaction/transaction-form.component";
import {ForbiddenComponent} from "./403/forbidden.component";

@NgModule({
  declarations:[
    AppComponent,
    LoginComponent,
    HistoryComponent,
    TransactionFormComponent,
    TransactionResultComponent,
    TransactionVerificationComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
