import { Component } from '@angular/core';
import { UserDataService } from './services/user-data.service';
import { SharedService } from './services/shared.service';

import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userArr:User[]=[];

  constructor(private userService: UserDataService,private sharedService: SharedService)
  {
  }
  get isLoginComponent(): boolean {
    return this.sharedService.isLoginComponent;
  }
  ngOnInit()
  {
    this.getAllData();
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



}
