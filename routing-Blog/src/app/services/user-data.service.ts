import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }
  users()
  {
    return[
      {name:'Rajendra',age:22,email:'Rajendra@TestScheduler.com'},
      {name:'Raj',age:22,email:'Raj@TestScheduler.com'},
      {name:'Dora',age:22,email:'Dora@TestScheduler.com'},
    ]
  }
}
