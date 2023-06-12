import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { UpdateUser } from '../models/updateuser.model';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private _http:HttpClient) { }

  getUserProfilebyId(email:string)
  {
    return this._http.get<User>(`http://localhost:1359/TravelCard/UpdateInfo?email=${email}`);
  }
  getUserData()
  {
    return this._http.get<User[]>('http://localhost:1359/TravelCard/');
  }
  updateUserById(inputString:number,user:UpdateUser)
  {
    return this._http.put(`http://localhost:1359/TravelCard/Update/UserInfo?customerId=${inputString}`,user);
  }





}
