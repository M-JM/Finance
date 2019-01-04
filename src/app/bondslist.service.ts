import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export interface Bond {
    Bondname: string;
    Ticker: string;
    Price: number;
    Rate: number;
    Maturity: number;
    Rating: string;
}


@Injectable()
export class BondslistService {
    Bonds: Observable<Bond[]>;
private _Bonds: BehaviorSubject<Bond[]>;
private url: string;
private dataStore: {
    Bonds: Bond[]
};

constructor(private http: Http) {
    this.url = 'http://localhost:4200/assets/bonds.json';
    this.dataStore = { Bonds: []};
    this._Bonds = <BehaviorSubject<Bond[]>>new BehaviorSubject([]);
    this.Bonds = this._Bonds.asObservable();
}




}

