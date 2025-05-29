import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PaymentSubmissionComponent } from './components/payment-submission/payment-submission.component';
import { TransactionHistoryComponent } from './components/transaction-history/transaction-history.component'; // ✅ Import

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'payment', component: PaymentSubmissionComponent },
  { path: 'history', component: TransactionHistoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
