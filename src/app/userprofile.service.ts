import {Injectable} from '@angular/core';


@Injectable()

export class UserprofileService {

    public User = [

        {
            firstname: '',
            lastname: '',
            savings: '',
            salary: '',
            country: '',
        }

    ];

   public questions = [
        {
          questionId: 1,
          question: 'I would describe my knowledge of investments as:',
          answers : [{
            answer: 'none', score: 1},
          {answer: 'limited', score: 2},
          {answer: 'good', score: 3},
          {answer: 'exstensive', score: 4}
        ]
        },
        {
        questionId: 2,
        question :  'When I invest my money, I am:',
        answers : [{answer: 'Most concerned about my investment losing value', score: 1},
        {answer: 'Equally concerned about my investment losing value', score: 2},
        {answer: 'equally concerned about my investment losing or gaining value', score: 3},
        {answer: 'Most concerned about my investment gaining value', score: 4}
                ]
              }
       ,
        {
            questionId: 3,
        question :  `Imagine that in the past three months, the overall
        stock market lost 25% of its value. An individual stock
        investment you own also lost 25% of its value. What would
        you do?`,
        answers : [{answer: 'Sell all my share', score: 1},
        {answer: 'Sell some of my shares', score: 2},
        {answer: 'do nothing', score: 3},
        {answer: 'buy more shares', score: 4}],
        },
        {
        questionId: 4,
        question :  'Select the investments you currently own',
        answers : [{answer: 'None', score: 1},
        {answer: 'bonds and/or bond funds', score: 2},
        {answer: 'stocks and/or stock funds', score: 3},
        {answer: 'International securities and/or international funds', score: 4}]
        },
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

    getQuestions() {
        return this.questions;
    }

}
