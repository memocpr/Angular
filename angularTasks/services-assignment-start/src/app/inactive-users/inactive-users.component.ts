import { Component, OnInit} from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
    users: string[];
  
    constructor(private usrService:UserService){}
  
    ngOnInit(){
      this.users=this.usrService.inactiveUsers;
    }
  
    onSetToActive(id: number) {
      this.usrService.setActive(id);
    }

}
