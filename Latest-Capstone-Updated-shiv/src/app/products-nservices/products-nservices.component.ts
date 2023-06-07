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
  selectedCategory:String=''
  selectedRegions:String=''
  productsServicesData:Products[]=[]
  countries: string[] = ['Iceland', 'USA', 'UK']; // Example country list
  regions: { [key: string]: string[] } = {
    'Iceland': ['Westfjords', 'Reykjavík', 'Reykjanes'],
    'USA': ['New Jersey', 'Texas', 'California'],
    'UK': ['Leeds', 'London', 'Sheffield']
  }; // Example states based on country
  constructor(private formBuilder: FormBuilder, private router: Router, private transactionService: TransactionDataService) {
    this.form = this.formBuilder.group({
      selectedCountry: [''],
      selectedRegions: [''],
      selectedCategory:[''],
    });
    // this.getProductsServices(); for Products
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
    this.transactionService.getProductService(this.selectedRegions,this.selectedCategory).subscribe(
        data =>
        {
          console.log(data)
          this.productsServicesData=data
        }
    )
  }
  onSelect() {
    this.selectedRegions = this.form.get('selectedRegions')?.value;
    this.selectedCategory = this.form.get('selectedCategory')?.value;
    // Redirect to the appropriate page based on selected region and category
    console.log(this.selectedCategory);
    console.log(this.selectedRegions);
    console.log(this.abc);
    if (this.selectedRegions!=null && this.selectedCategory!=null && this.selectedRegions.length!=0) {
     const redirectUrl = `/hotel`;
     localStorage.setItem('optionSelected',this.abc);
     console.log(redirectUrl);
      this.router.navigate([redirectUrl]);
    }
  }
}
