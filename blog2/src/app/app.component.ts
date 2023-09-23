import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog2';
  list:any[]=[];
  addtask(item:string)
  {
    this.list.push({id:this.list.length,name:item});
    console.warn(this.list);
  }
  removeTask(id:number)
  {
    console.warn(id);
    this.list=this.list.filter(item=>item.id!==id);
  }
  data=10;

  updateChild()
  {
    this.data=Math.floor(Math.random()*10);
  }

  userDetails=[
    {Name :'Rajendra', Email : 'Rajendra@email.com',phone :9876 ,UserAccounts:['Facebook','Gmail','Whatsapp']},
    {Name :'Raj', Email : 'Raj@email.com',phone :9876 ,UserAccounts:['Instagram','Gmail','Google']},
    {Name :'Bheem', Email : 'Bheem@email.com',phone :9876,UserAccounts:['Apple','Samsung ','Whatsapp'] },
    {Name :'Tom', Email : 'Tom@email.com',phone :9876 ,UserAccounts:['Yahoo','Gmail','Telegram']},
    {Name :'jerry', Email : 'jerry@email.com',phone :9876 ,UserAccounts:['Twitter','bard','ChatGpt']},

  ];

  UpdateData(item:string)
  {
    console.warn(item);
  }
}
