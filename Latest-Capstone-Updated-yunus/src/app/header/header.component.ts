import { Component, Input, OnInit } from '@angular/core';
import { AddmoneyComponent } from '../addmoney/addmoney.component';
import { FormBuilder } from '@angular/forms';
import { UserDataService } from '../services/user-data.service';
import { TransactionDataService } from '../services/transaction-data.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private formBuilder: FormBuilder,private userProfileService: UserDataService, private transactionService: TransactionDataService) {
  }
  
  @Input()
  amountData:any;
  loggedInUser: User | undefined;
}

