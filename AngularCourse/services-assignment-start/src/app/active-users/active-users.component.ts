import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
    users: string[];
  
    constructor(private usrService:UserService){}
  
    ngOnInit(){
      this.users=this.usrService.activeUsers;
    }
  
    onSetToInactive(id: number) {
      this.usrService.setInactive(id);
    }
  
  }
