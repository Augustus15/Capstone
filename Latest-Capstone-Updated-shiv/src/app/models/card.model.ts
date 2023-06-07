import {Transaction} from "./transaction.model"

export class Card{
  cardBalance:number=0
  cardNumber:number=0
  cvv:number=0
  validFrom:string=''
  validThru:string=''
  accountNumber:number=0
  transactionCount:number=0
  transactions:Transaction[]=[]


}
