import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from "./login/login.component";
import {TransactionFormComponent} from "./transaction/transaction-form.component";
import {TransactionVerificationComponent} from "./transaction/transaction-verification.component";
import {TransactionResultComponent} from "./transaction/transaction-result.component";
import {HistoryComponent} from "./history/history.component";
import {ForbiddenComponent} from "./403/forbidden.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'trform',  component: TransactionFormComponent },
  { path: 'trver',  component: TransactionVerificationComponent },
  { path: 'trres',  component: TransactionResultComponent },
  { path: 'history',  component: HistoryComponent },
  { path: '403',  component: ForbiddenComponent },
  { path: '**', redirectTo: '/403', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
