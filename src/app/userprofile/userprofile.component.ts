import { UserprofileService } from './../userprofile.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  UserprofileService: UserprofileService;

  constructor( userprofileService: UserprofileService  ) { this.UserprofileService = userprofileService;}


  ngOnInit() {

    }
    onSubmit(UserForm) {
      if (UserForm.valid) {
        console.log(UserForm.value);
      }
      this.UserprofileService.addUser(
       UserForm.value.firstname,
        UserForm.value.lastname,
        UserForm.value.savings,
        UserForm.value.salary,
        UserForm.value.country);
    }


  }

