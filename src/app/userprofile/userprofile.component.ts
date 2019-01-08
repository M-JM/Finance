import { UserprofileService } from './../userprofile.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  UserprofileService: UserprofileService;
  questions: any[];

  constructor( UserprofileService: UserprofileService  ) { this.UserprofileService = UserprofileService;
  }


  ngOnInit() {
    this.questions = this.UserprofileService.getQuestions();
    console.log(this.questions);

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
        console.log(this.UserprofileService.User);
    }

  }

