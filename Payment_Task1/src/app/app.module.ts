import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentSubmissionComponent } from './components/payment-submission/payment-submission.component';
import { TransactionHistoryComponent } from './components/transaction-history/transaction-history.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PaymentSubmissionComponent,
    TransactionHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
