import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  'firebase/compat/auth';
import  'firebase/compat/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


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
  selector: 'app-otpcode',
  templateUrl: './otpcode.component.html',
  styleUrls: ['./otpcode.component.css']
})
export class OtpcodeComponent implements OnInit {
  otp!: string;
  verify: any;
  constructor(private router: Router, private ngZone: NgZone) {}

  config = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      width: '50px',
      height: '50px',
    },
  };

  ngOnInit() {

firebase.initializeApp(config);

    this.verify = JSON.parse(localStorage.getItem('verificationId') || '{}');
    console.log(this.verify);
  }




  onOtpChange(otp: string) {
    this.otp = otp;
  }

  handleClick() {
    console.log(this.otp);
    var credential = firebase.auth.PhoneAuthProvider.credential(
      this.verify,
      this.otp
    );

    console.log(credential);
    firebase
      .auth()
      .signInWithCredential(credential)
      .then((response) => {
        console.log(response);
        localStorage.setItem('user_data', JSON.stringify(response));
        this.ngZone.run(() => {
          this.router.navigate(['/dashboard']);
        });
      })
      .catch((error) => {
        this.wrongotp=true;
        alert("Invalid OTP")
        // console.log(error);
        // alert(error.message);
      });
  }


  phoneNumber: any;
  reCaptchaVerifier!: any;
  wrongotp=false;
  getOTP() {
    this.phoneNumber=localStorage.getItem('number');
    this.reCaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      'sign-in-button',
      {
        size: 'invisible',
      }
    );
    console.log(this.reCaptchaVerifier);

    console.log(this.phoneNumber);
    firebase
      .auth()
      .signInWithPhoneNumber(this.phoneNumber, this.reCaptchaVerifier)
      .then((confirmationResult) => {
        localStorage.setItem(
          'verificationId',
          JSON.stringify(confirmationResult.verificationId)
        );

      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      });
  }
}
