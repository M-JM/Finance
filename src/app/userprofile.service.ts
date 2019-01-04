import {Injectable} from '@angular/core';


@Injectable()

export class UserprofileService {

    private User = [

        {
            firstname: '',
            lastname: '',
            savings: '',
            salary: '',
            country: '',
        }

    ];

    addUser(firstname, lastname, savings, salary, country) {

        const pos = this.User.findIndex((User) => {
            return User.firstname === firstname;
        } );
        if (pos !== -1) {
            return;
        }
        const newUser = {firstname: firstname, lastname: lastname, savings: savings, salary: salary, country: country };
this.User.push(newUser);
    }

   
}
