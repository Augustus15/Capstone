import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserDataService } from '../services/user-data.service';
import { User } from '../models/user.model';
import { UpdateUser } from '../models/updateuser.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  form!: FormGroup;
  loggedInUser: User | undefined;
  getUpdatedUser: UpdateUser = {
    email: '',
    mobileNumber: '',
    address: {
      line1: '',
      city: '',
      state: '',
      pincode: ''
    }
  };

  constructor(private formBuilder: FormBuilder, private userProfileService: UserDataService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      mobileNumber: [''],
      email: [''],
      address: this.formBuilder.group({
        line1: [''],
        city: [''],
        state: [''],
        pincode: ['']
      })
    });

    this.getUserInfoByLogin();
  }

  getUserInfoByLogin() {
    const emailValue = localStorage.getItem("email");
    this.userProfileService.getUserData().subscribe(
      data => {
        this.loggedInUser = data.find((a) => a.email === emailValue);
        this.form.patchValue({
          mobileNumber: this.loggedInUser?.mobileNumber,
          email: this.loggedInUser?.email,
          address: {
            line1: this.loggedInUser?.address?.line1,
            city: this.loggedInUser?.address?.city,
            state: this.loggedInUser?.address?.state,
            pincode: this.loggedInUser?.address?.pincode
          }
        });
      }
    );
  }



  onSubmit() {
    if (this.form.valid) {
      const updatedUser: UpdateUser = {
        email: this.form.value.email || this.loggedInUser?.email,
        mobileNumber: this.form.value.mobileNumber || this.loggedInUser?.mobileNumber,
        address: {
          line1: this.form.value.address.line1 || this.loggedInUser?.address.line1,
          city: this.form.value.address.city || this.loggedInUser?.address.city,
          state: this.form.value.address.state || this.loggedInUser?.address.state,
          pincode: this.form.value.address.pincode || this.loggedInUser?.address.pincode
        }
      };

      this.userProfileService.updateUserById(Number(this.loggedInUser?.customerId), updatedUser).subscribe(
        data => {
          alert('USER UPDATED!');
        },
        error => {
          alert('Error occurred while updating user.');
        }
      );
    } else {
      // Form is invalid, display error messages if necessary
      alert('Form not updated!');
    }
  }

  patchFormValues() {
    this.form.patchValue({
      mobileNumber: this.loggedInUser?.mobileNumber,
      email: this.loggedInUser?.email,
      address: {
        line1: this.loggedInUser?.address.line1,
        city: this.loggedInUser?.address.city,
        state: this.loggedInUser?.address.state,
        pincode: this.loggedInUser?.address.pincode
      }
    });
  }
}
