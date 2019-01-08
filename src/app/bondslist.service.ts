import { Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';




@Injectable()
export class BondslistService {
private Bond = [
    {
        'bondname': '',
        'price': 0,
        'ticker': '',
        'rate': '',
        'maturity': 0,
        'rating': 0,
    },
];

bonds = new Subject<void>();



constructor(private http: Http) {
    this.http = http;
    this.FetchBonds();
}

FetchBonds() {
    this.http.get('http://localhost:4200/assets/bonds.json')
    .map((response: Response) => {
        const data = response.json();

        const bonds = data.map((Bond) => {
            return{ bondname: Bond.bondname,
                    price: Bond.price,
                    ticker: Bond.ticker,
                    rate: Bond.rate,
                    maturity: Bond.maturity,
                    rating: Bond.rating
                };
            });
                return bonds;
        }
    )
    .subscribe((data) => {
        console.log(data);
        this.Bond = data;
        this.bonds.next();
    }
    );
}

GetBonds() {
    return this.Bond;
}

AddBond(bondname, price, ticker, rate, maturity, rating) {
    const newBond = {
        bondname: bondname,
        price: price,
        ticker: ticker,
        rate: rate,
        maturity: maturity,
        rating: rating
    };

    this.Bond.push(newBond);

}

}
