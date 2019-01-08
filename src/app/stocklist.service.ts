import { Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';


@Injectable()
export class StocklistService {
    private Stock =  [];

stocks = new Subject<void>();

constructor(private http: Http) {
    this.http = http;
    this.FetchStocks();
}

FetchStocks() {

this.http.get('http://localhost:4200/assets/stocks.json')
.map((response: Response) => {
    const data = response.json();

const stocksA = data.map((Stock) => {
    return { stockname: Stock.stockname, price: Stock.Price, ticker: Stock.Ticker };
});
return stocksA;
}
)
.subscribe((data) => {
    console.log(data);
    this.Stock = data;
    this.stocks.next();
        }
    );
}
GetStock() {
        return this.Stock;
}

AddStock(stockname, price, ticker) {
    const newStock = {stockname: stockname,  price: price, ticker: ticker};
    this.Stock.push(newStock);
    console.log(this.Stock);
}




}

