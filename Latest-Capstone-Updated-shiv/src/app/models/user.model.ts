import { Address } from "./address.model"
import { Card } from "./card.model"

export class User{

    firstName:string=''
    lastName:string=''
    customerId:number=0
    accountNumber:number=0
    ifsc:string=''
    mobileNumber:string=''
    email:string=''
    address:Address={
      line1: "",
      city: "",
      state: "",
      pincode: 0
    }
    password:string=''
    dob:string=''
    accBalance:number=0
    travelCard:Card={
      cardBalance: 0,
      cardNumber: 0,
      cvv: 0,
      validFrom: "",
      validThru: "",
      accountNumber: 0,
      transactionCount: 0,
      transactions: []
    }
    hasTravelCard:boolean=false




}
