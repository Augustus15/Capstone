import { Component } from '@angular/core';
import { Transaction } from '../models/transaction.model';
import { TransactionDataService } from '../services/transaction-data.service';
import { PaginationInstance, PaginationService } from 'ngx-pagination';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
  providers: [PaginationService]

})
export class TransactionComponent {
  transactions: Transaction[] = [];
  pagedTransactions: Transaction[] = []; // Displayed transactions on the current page
  pageSize = 8; // Number of transactions per page
  currentPage = 1; // Current page number
  totalItems = 0;


  constructor(private transactionService: TransactionDataService) {
    this.getAllTransactions();

  }

  getAllTransactions() {
    this.transactionService.getTransactionData().subscribe(data => {
      this.transactions = data;
      this.transactions.reverse();
      console.log(this.transactions)
      this.totalItems = this.transactions.length;
      this.setPage(this.currentPage); // Set the page after fetching the data
    });
  }

  setPage(page: number) {
    this.currentPage = page;
    const startIndex = (page - 1) * this.pageSize;
    const endIndex = Math.min(startIndex + this.pageSize, this.totalItems);
    this.pagedTransactions = this.transactions.slice(startIndex, endIndex);
  }

  // key='transactionDate'
  // reverse:boolean=false
  // sort(key:any)
  // {
  //   this.key = key
  //   this.reverse = !this.reverse
  // }
  onPageChange(event: any) {
    this.setPage(event);
  }
}
