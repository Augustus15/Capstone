import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../models/transaction.model';
import { Products } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})

export class TransactionDataService {
  constructor(private _http: HttpClient) { }

  getTransactionData() {
    return this._http.get<Transaction[]>('http://localhost:9531/Transaction/');
  }

  getProductService(region:String,category:String)
  {
    return this._http.get<Products[]>(`http://localhost:2468/Services/${region}/${category}`)
  }

  postTransaction(addTransact: Transaction,cardNumber:any)
  {
    return this._http.post<Transaction>(`http://localhost:9531/Transaction/NewTransaction/${cardNumber}`,addTransact)
  }
  addMoney(cardNumber:number,amount:Transaction)
  {
    return this._http.put<Transaction>(`http://localhost:9531/Transaction/AddMoney/${cardNumber}`,amount);
  }
}
