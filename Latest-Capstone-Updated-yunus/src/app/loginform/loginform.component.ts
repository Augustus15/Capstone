import { Component } from '@angular/core';
import { FormBuilder,FormGroup, FormControl, Validators }  from '@angular/forms'
import { SharedService } from 'src/app/services/shared.service';
import { UserDataService } from '../services/user-data.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent {
  isLoginComponent = true;
  userArr:User[]=[];
  loginForm:any=''

  constructor(private formBuilder:FormBuilder,private sharedService: SharedService,private userService: UserDataService, private router:Router){
    localStorage.clear();
    this.getAllData();
    this.sharedService.isLoginComponent = true;
    this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password:["",[Validators.required]]
      }
    )
  }
  getAllData(){
    this.userService.getUserData().subscribe(
      data =>{
        console.log(data)
        this.userArr = data
      }
    )
  }
  validateLogin() {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;

    for (let a of this.userArr) {
      if (email === a.email && password === a.password) {
        alert("User logged in!");
        this.router.navigate(['/dashboard']);
        this.sharedService.isLoginComponent = false;
        localStorage.setItem("email",email);
        return;
      }
    }
    alert('Login failed!');
  }
}
