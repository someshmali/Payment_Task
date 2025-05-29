import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {
  transactions: any[] = [];
  filterRecipient: string = '';
  filterStartDate: string = '';
  filterEndDate: string = '';

  // Sorting
  sortField: string = 'time';
  sortDirection: 'asc' | 'desc' = 'desc';

  // Pagination
  currentPage: number = 1;
  itemsPerPage: number = 5;

  constructor(private paymentService: PaymentService) {}

  ngOnInit(): void {
    this.transactions = this.paymentService.getPayments();
  }

  get filteredTransactions() {
    const filtered = this.transactions.filter(txn => {
      const matchRecipient = !this.filterRecipient || txn.upi.toLowerCase().includes(this.filterRecipient.toLowerCase());
      const txnDate = new Date(txn.time).toISOString().split('T')[0];
      const afterStart = !this.filterStartDate || txnDate >= this.filterStartDate;
      const beforeEnd = !this.filterEndDate || txnDate <= this.filterEndDate;
      return matchRecipient && afterStart && beforeEnd;
    });

    // Sorting
    return filtered.sort((a, b) => {
      let valueA = a[this.sortField];
      let valueB = b[this.sortField];

      if (this.sortField === 'time') {
        valueA = new Date(valueA).getTime();
        valueB = new Date(valueB).getTime();
      }

      if (valueA < valueB) return this.sortDirection === 'asc' ? -1 : 1;
      if (valueA > valueB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }

  get paginatedTransactions() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredTransactions.slice(startIndex, startIndex + this.itemsPerPage);
  }

  totalPages(): number {
    return Math.ceil(this.filteredTransactions.length / this.itemsPerPage);
  }

  changePage(direction: number): void {
    const newPage = this.currentPage + direction;
    if (newPage >= 1 && newPage <= this.totalPages()) {
      this.currentPage = newPage;
    }
  }

  changeSort(field: string): void {
    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortDirection = 'asc';
    }
    this.currentPage = 1;
  }

  clearFilters(): void {
    this.filterRecipient = '';
    this.filterStartDate = '';
    this.filterEndDate = '';
    this.currentPage = 1;
  }
}
