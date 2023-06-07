import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireModule } from "@angular/fire/compat";
import { AppRoutingModule } from './app-routing.module';
import { environment } from './firebase-config';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginformComponent } from './loginform/loginform.component';
import { MaterialModule } from './material/material.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OtpcodeComponent } from './otpcode/otpcode.component';
import { NgOtpInputModule } from 'ng-otp-input';
import firebase from 'firebase/compat/app';
import { OtpdashboardComponent } from './otpdashboard/otpdashboard.component';
import { PhoneNumberComponent } from './phone-number/phone-number.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TransactionComponent } from './transaction/transaction.component';
import { HomeComponent } from './home/home.component';
import { AddmoneyComponent } from './addmoney/addmoney.component';
import { ProfileComponent } from './profile/profile.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ProductsNservicesComponent } from './products-nservices/products-nservices.component';
import { HotelComponent } from './products-nservices/hotel/hotel.component';
import { MaskCardNumberPipe } from './pipes/mask-card-number.pipe';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginformComponent,
    OtpcodeComponent,
    OtpdashboardComponent,
    PhoneNumberComponent,
    FooterComponent,
    HeaderComponent,
    TransactionComponent,
    HomeComponent,
    AddmoneyComponent,
    ProfileComponent,
    ErrorpageComponent,
    ProductsNservicesComponent,
    HotelComponent,
    MaskCardNumberPipe
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseconfig),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    AngularFireAuthModule,
    NgOtpInputModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(){
  firebase.initializeApp(environment.firebaseconfig);
}
 }
