import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDataService } from '../services/user-data.service';
import { User } from '../models/user.model';
import { TransactionDataService } from '../services/transaction-data.service';
import { Transaction } from '../models/transaction.model';

@Component({
  selector: 'app-addmoney',
  templateUrl: './addmoney.component.html',
  styleUrls: ['./addmoney.component.css']
})
export class AddmoneyComponent implements OnInit{
  moneyForm!: FormGroup;
  loggedInUser: User | undefined;
  enableTPIN=false;
  actualCardNumber!:any;
  tpin:string=''
  todayDate:any


  constructor(private formBuilder: FormBuilder,private userProfileService: UserDataService, private transactionService: TransactionDataService) {}
  ngOnInit() {
    this.getUserInfoByLogin();
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

     this.todayDate = `${year}-${month}-${day}`;
    this.moneyForm = this.formBuilder.group({
      cardHolderName: [''],
      cardNumber: [''],
      amount: ['', Validators.required],
      expire: ['', Validators.required],
      cvv: ['', [Validators.required, Validators.pattern('[0-9]{3}')]]
    });

  }

  addMoney() {
    if (this.moneyForm.valid) {
      this.actualCardNumber=this.loggedInUser?.travelCard.cardNumber;

      if(this.loggedInUser?.travelCard.cvv == Number(this.moneyForm.value.cvv))
      {
        this.enableTPIN=true
      }
    }

  }


  moneyAdded()
  {
    if(this.tpin === String(this.loggedInUser?.tpin))
    {
      let t = new Transaction();
      t.amount =this.moneyForm.value.amount
      t.transactionDate = this.todayDate;
      t.receiver = "Self"
      t.transactionType = "Credit"
      t.cardNumber = this.actualCardNumber

      this.transactionService.addMoney(this.actualCardNumber,t).subscribe(
        data=>
        {

          alert('Money added Successfully!')
          localStorage.setItem('amount',(this.loggedInUser?.travelCard.cardBalance + this.moneyForm.value.amount));
          window.location.reload();
        }
      )


    }
  }


 getUserInfoByLogin() {
    const emailValue = localStorage.getItem("email");
    this.userProfileService.getUserData().subscribe(
      data => {
        this.loggedInUser = data.find((a) => a.email === emailValue);
        this.actualCardNumber=this.loggedInUser?.travelCard.cardNumber;

        this.moneyForm.patchValue({
          cardHolderName: this.loggedInUser?.firstName+" "+this.loggedInUser?.lastName,
          cardNumber: this.loggedInUser?.travelCard.cardNumber,
        });
      }
    );
  }



}






