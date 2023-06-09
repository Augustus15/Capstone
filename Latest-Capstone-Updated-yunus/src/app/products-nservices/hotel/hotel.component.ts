import { Component, OnInit } from '@angular/core';
import { ProductsNservicesComponent } from '../products-nservices.component';
import { Products } from 'src/app/models/products.model';
import { TransactionDataService } from 'src/app/services/transaction-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent {

selectedArray:Products[]=[]

static addedProduct:Products;
 showDataOf='';
 constructor(private productsDataService: TransactionDataService, private router:Router)
 {}
  ngOnInit()
  {
    this.getAllData();
   var optionSelected=localStorage.getItem('optionSelected');

   if(optionSelected?.toLowerCase()=='hotel')
    {
    this.showDataOf='Hotel'
    }
    if(optionSelected?.toLowerCase()=='food')
    {
    this.showDataOf='Food'
    }

  }

  payMoney(product:Products)
  {
    HotelComponent.addedProduct = product;
    this.router.navigate(['receipt'])

  }

  getAllData()
  {
    const regs = localStorage.getItem('region')
    const cat = localStorage.getItem('category')
    this.productsDataService.getProductService(String(regs),String(cat)).subscribe(
      data =>
      {
        this.selectedArray=data
      }
    )
  }
  // pay(hotelName: string) {
  //   // Perform the payment logic based on the selected hotel
  //   console.log(`Payment for ${hotelName} initiated.`);
  //   // Add your payment processing code here, such as integrating with a payment gateway or updating the backend database
  // }
}
