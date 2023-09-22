import { Component ,OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  constructor() { }

  @ Input() item:{Name:string,Email:string}={Name:'',Email:''};
 
 ngOnInit():void{
 
 }
 
}
