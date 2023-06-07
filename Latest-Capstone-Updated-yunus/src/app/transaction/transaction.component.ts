import { Component } from '@angular/core';
import { Transaction } from '../models/transaction.model';
import { TransactionDataService } from '../services/transaction-data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {

  transactions: Transaction[] = []


  constructor(private transactionService: TransactionDataService)
  {
    this.getAllTransactions();
  }

  getAllTransactions()
  {
    this.transactionService.getTransactionData().subscribe(
        data =>{
          this.transactions = data
        }

    )
  }
}
