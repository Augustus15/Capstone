import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


// import core firebase client (required)
import firebase from 'firebase/compat/app';

// import Firebase Authentication (optional)
import  'firebase/compat/auth';
import { User } from '../models/user.model';
import { UserDataService } from '../services/user-data.service';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';

// add your firebase key
var config={

  apiKey: "AIzaSyB2gXtk1Xl3_5GjlTSn9zvKyA4jmOnMuzE",
  authDomain: "otpnew-e6dff.firebaseapp.com",
  projectId: "otpnew-e6dff",
  storageBucket: "otpnew-e6dff.appspot.com",
  messagingSenderId: "829947982660",
  appId: "1:829947982660:web:2817d4186e0bd3fd651d11",
  measurementId: "G-8DJSWGX05G"
}



@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.css']
})
export class PhoneNumberComponent {
  phoneNumber: any;
  reCaptchaVerifier!: any;
  userArr:User[]=[];

  constructor(private userService: UserDataService,private sharedService: SharedService, private router:Router ){

  }

  ngOnInit() {
firebase.initializeApp(config);
this.getAllData();
this.sharedService.isLoginComponent = true
  }


  validateLogin() {
    const mobile = this.phoneNumber;

    for (let a of this.userArr) {
      if (a.mobileNumber === mobile) {
        // this.sharedService.isLoginComponent = false;
        localStorage.setItem("email",a.email);

        return; // Exit the function after successful login
      }
    }
  }

  getAllData()
{
  this.userService.getUserData().subscribe(
    data =>
    {
      console.log(data)
      this.userArr = data
    }
  )
}
  getOTP() {
  const user = this.userArr.find(a => a.mobileNumber === this.phoneNumber);

  if (user) {
    this.reCaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      size: 'invisible',
    });

    firebase.auth().signInWithPhoneNumber(this.phoneNumber, this.reCaptchaVerifier)
      .then((confirmationResult) => {
        localStorage.setItem('verificationId', JSON.stringify(confirmationResult.verificationId));
        localStorage.setItem('number', this.phoneNumber);
        this.validateLogin();
        window.location.href = '/code';
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      });
  } else {
    alert('Number does not exist!');
  }
}



}


