import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http:HttpClient) {

   }
   url='https://randomuser.me/api';
    users()
    {
      return this.http.get(this.url);
    }
  // users()
  // {
  //   return[
  //     {name:'Rajendra',age:22,email:'Rajendra@TestScheduler.com'},
  //     {name:'Raj',age:22,email:'Raj@TestScheduler.com'},
  //     {name:'Dora',age:22,email:'Dora@TestScheduler.com'},
  //   ]
  // }
}
