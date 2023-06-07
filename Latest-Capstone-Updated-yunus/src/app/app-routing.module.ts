import { Injectable, NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate,Router } from '@angular/router';
import { OtpdashboardComponent } from './otpdashboard/otpdashboard.component';
import { PhoneNumberComponent } from './phone-number/phone-number.component';
import { LoginformComponent } from './loginform/loginform.component';
import { OtpcodeComponent } from './otpcode/otpcode.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionComponent } from './transaction/transaction.component';
import { AddmoneyComponent } from './addmoney/addmoney.component';
import { ProfileComponent } from './profile/profile.component';
import {ProductsNservicesComponent} from './products-nservices/products-nservices.component'
import { HomeComponent } from './home/home.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HotelComponent } from './products-nservices/hotel/hotel.component';

// Create a custom route guard to check if the user is logged in
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const email = localStorage.getItem('email');
    if (email) {
      return true;
    } else {
      this.router.navigate(['/error']); // Redirect to ErrorPageComponent
      return false;
    }
  }
}
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'forgot', component: PhoneNumberComponent },
  { path: 'login', component: LoginformComponent },
  { path: 'code', component: OtpcodeComponent },
  { path: 'dashboard', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'transaction', component: TransactionComponent, canActivate: [AuthGuard] },
  { path: 'addMoney', component: AddmoneyComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
   { path: 'error', component: ErrorpageComponent },
   { path: 'logout', component: LoginformComponent },
   {path:'hotel', component:HotelComponent},

   {path:'products', component:ProductsNservicesComponent},

  { path: '**', redirectTo: 'error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard], // Add the AuthGuard as a provider
})
export class AppRoutingModule {}
