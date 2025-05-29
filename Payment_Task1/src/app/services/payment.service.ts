import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private storageKey = 'paymentData';

  savePayment(data: any): void {
    const existing = JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    existing.push(data);
    localStorage.setItem(this.storageKey, JSON.stringify(existing));
  }

  getPayments(): any[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  clearPayments(): void {
    localStorage.removeItem(this.storageKey);
  }
}
