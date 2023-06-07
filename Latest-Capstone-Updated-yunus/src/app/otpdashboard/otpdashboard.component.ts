// import { Component } from '@angular/core';
import { Component, NgZone, OnInit } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/auth';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otpdashboard',
  templateUrl: './otpdashboard.component.html',
  styleUrls: ['./otpdashboard.component.css']
})
export class OtpdashboardComponent implements OnInit {
  userData: any;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    var data = JSON.parse(localStorage.getItem('user_data') || '{}');
    this.userData = data.user.phoneNumber;
    console.log(this.userData);
  }

  logout() {
    return this.afAuth.signOut().then(() => {
      this.ngZone.run(() => {
        this.router.navigate(['phone']);
      });
    });
  }
}
