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
import {HttpClientModule} from "@angular/common/http";
import {HttpModule} from "@angular/http";
import {TransferService} from "./services/TransferService";
import {AuthService} from "./services/auth.service";
import {AuthGuard} from "./services/AuthGuard";
import {TransferGuard} from "./services/transfer-guard.service";
import {AdminGuard} from "./services/admin.guard";
import {AdminComponent} from "./admin/admin.component";

@NgModule({
  declarations:[
    AppComponent,
    LoginComponent,
    HistoryComponent,
    TransactionFormComponent,
    TransactionResultComponent,
    TransactionVerificationComponent,
    ForbiddenComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
      TransferService,
      AuthService,
      AuthGuard,
      TransferGuard,
      AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
