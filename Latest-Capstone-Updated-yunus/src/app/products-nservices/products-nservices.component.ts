import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TransactionDataService } from '../services/transaction-data.service';
import { Products } from '../models/products.model';

@Component({
  selector: 'app-products-nservices',
  templateUrl: './products-nservices.component.html',
  styleUrls: ['./products-nservices.component.css']
})
export class ProductsNservicesComponent {
  radiovalue='';
  form: FormGroup;
  selectedCategory:string=''
  selectedRegions:string=''
  static productsServicesData:Products[]=[]

  countries: string[] = ['Iceland', 'USA', 'UK']; // Example country list
  regions: { [key: string]: string[] } = {
    'Iceland': ['Westfjords', 'Reykjavik', 'Reykjanes'],
    'USA': ['New jersey', 'Texas', 'California'],
    'UK': ['Leeds', 'London', 'Sheffield']
  }; // Example states based on country


  constructor(private formBuilder: FormBuilder, private router: Router, private transactionService: TransactionDataService) {
    this.form = this.formBuilder.group({
      selectedCountry: [''],
      selectedRegions: [''],
      selectedCategory:[''],

    });
  }

  abc='';
  onCountryChange() {
    const selectedCountry = this.form.get('selectedCountry')?.value;
    const states = this.regions[selectedCountry];
    this.form.get('selectedRegions')?.setValue('');
    // Update the states dropdown options based on the selected country
  }

  getProductsServices()
  {
   localStorage.setItem('region',this.selectedRegions)
   localStorage.setItem('category',this.abc)
  }

 onSelect() {
    this.selectedRegions = this.form.get('selectedRegions')?.value;
    this.selectedCategory = this.form.get('selectedCategory')?.value;
     this.getProductsServices();

    // Redirect to the appropriate page based on selected region and category
    console.log(this.selectedCategory);
    console.log(this.selectedRegions);


    console.log(this.abc);


    if (this.selectedRegions!=null && this.selectedCategory!=null && this.selectedRegions.length!=0) {
     const redirectUrl = `/Buy`;
     localStorage.setItem('optionSelected',this.abc);
     console.log(redirectUrl);
      this.router.navigate([redirectUrl]);


    }
  }
}








