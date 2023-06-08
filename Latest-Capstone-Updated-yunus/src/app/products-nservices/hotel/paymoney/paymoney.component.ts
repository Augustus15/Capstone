import { Component } from '@angular/core';
import { Products } from 'src/app/models/products.model';
import { HotelComponent } from '../hotel.component';
import { TransactionDataService } from 'src/app/services/transaction-data.service';
import { User } from 'src/app/models/user.model';
import { Transaction } from 'src/app/models/transaction.model';
import { Location } from '@angular/common';

import { UserDataService } from 'src/app/services/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paymoney',
  templateUrl: './paymoney.component.html',
  styleUrls: ['./paymoney.component.css']
})

export class PaymoneyComponent {
  loggedInUser: User | undefined;
  actualCardNumber!: any;

  payProduct!: Products;
  todayDate: any;
  categoryName: any;
  serviceId: any;
  showTpinField: boolean = false;
  tpin: String = '';

  constructor(private transactionService: TransactionDataService, private userProfileService: UserDataService, private router: Router, private location:Location) {}

  getUserInfoByLogin() {
    const emailValue = localStorage.getItem("email");
    this.userProfileService.getUserData().subscribe(
      data => {
        this.loggedInUser = data.find((a) => a.email === emailValue);
        this.actualCardNumber = this.loggedInUser?.travelCard?.cardNumber ?? '';
      }
    );
  }

  productPurchased() {
    if (this.tpin === String(this.loggedInUser?.tpin)) {
      let t = new Transaction();
      t.amount = this.payProduct.price;
      t.transactionDate = this.todayDate;
      t.receiver = String(this.payProduct.name);
      t.transactionType = "Debit";
      t.cardNumber = this.actualCardNumber;

      this.transactionService.postTransaction(t, this.actualCardNumber).subscribe(
        data => {
          alert('Purchase successful');
          localStorage.setItem('amount', String((this.loggedInUser?.travelCard?.cardBalance ?? 0) - Number(this.payProduct?.price)));
          this.router.navigate(['transaction']).then(() => {
            window.location.reload();
                  });
                }
      );
              }
    else
     {
      alert('Something went wrong!');
    }
  }

  ngOnInit() {
    this.getUserInfoByLogin();
    this.payProduct = HotelComponent.addedProduct;
    console.log(this.payProduct);
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    this.todayDate = `${year}-${month}-${day}`;
    this.categoryName = String(this.payProduct?.category);
    this.serviceId = this.payProduct?.serviceId;
  }

  payAmountforProduct() {

  }
}
