import { Component } from '@angular/core';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment-submission',
  templateUrl: './payment-submission.component.html',
  styleUrls: ['./payment-submission.component.css']
})
export class PaymentSubmissionComponent {
  upiId: string = '';
  recipientUpiId: string = '';
  amount: number | null = null;
  notes: string = '';

  upiError: string = '';
  paymentError: string = '';
  successMessage: string = '';

  constructor(private paymentService: PaymentService) { } // ✅ inject service

  validateUpi(upi: string): boolean {
    const upiPattern = /^[\w.-]+@[\w.-]+$/;
    return upiPattern.test(upi);
  }

  checkUpi() {
    this.upiError = this.validateUpi(this.upiId) ? '' : 'Invalid UPI ID format';
  }

  submitPayment() {
    this.paymentError = '';
    this.successMessage = '';

    if (!this.validateUpi(this.recipientUpiId)) {
      this.paymentError = '❌ Invalid recipient UPI ID';
      this.autoHideError();
      return;
    }

    if (!this.amount || this.amount <= 0) {
      this.paymentError = 'Amount must be greater than zero';
      this.autoHideError();
      return;
    }

    // ✅ Save to local storage via service
    const paymentData = {
      upi: this.recipientUpiId,
      amount: this.amount,
      notes: this.notes,
      time: new Date(),
      status: 'success'   // Add status here
    };
    this.paymentService.savePayment(paymentData);


    this.successMessage = `✅ Payment of ₹${this.amount} submitted successfully!`;
    this.autoHideSuccess();

    // Reset form
    this.recipientUpiId = '';
    this.amount = null;
    this.notes = '';
  }

  autoHideError() {
    setTimeout(() => {
      this.paymentError = '';
    }, 5000);
  }

  autoHideSuccess() {
    setTimeout(() => {
      this.successMessage = '';
    }, 5000);
  }

  closeError() {
    this.paymentError = '';
  }

  closeSuccess() {
    this.successMessage = '';
  }

}
