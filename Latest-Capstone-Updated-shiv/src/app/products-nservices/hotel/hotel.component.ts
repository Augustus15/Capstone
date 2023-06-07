import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent {

 showDataOf='';
  ngOnInit()
  {

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
  // pay(hotelName: string) {
  //   // Perform the payment logic based on the selected hotel
  //   console.log(`Payment for ${hotelName} initiated.`);
  //   // Add your payment processing code here, such as integrating with a payment gateway or updating the backend database
  // }
}
