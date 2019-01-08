import { Injectable } from '@angular/core';

@Injectable()
export class BuyService {

  Stockportfolio = [];
  Bondportfolio = [];
  Selectedbond = {
      bondname: '',
      price: '',
      ticker: '',
      rate: '',
      maturity: '',
      rating: '',
      quantity: '',
    };

    Selectedstock = {
     stockname: '',
      price: '',
      ticker: '',
      quantity: '',
    };

  constructor() {
  }


  getStockportfolio() {
    return this.Stockportfolio.slice();
  }


  getBondportfolio() {
    return this.Bondportfolio;
  }


  BuyBond(bondname, price, ticker, rate, maturity, rating, quantity) {
    const boughtBond = {
      bondname: bondname,
      price: price,
      ticker: ticker,
      rate: rate,
      maturity: maturity,
      rating: rating,
      quantity: quantity
    };
    this.Bondportfolio.push(boughtBond);
    console.log(this.Bondportfolio);
  }

getSelectedbond() {
  return this.Selectedbond;
}

BuyStock(stockname, price, ticker, quantity) {

  const boughtStock = {
    stockname: stockname,
    price: price,
    ticker: ticker,
    quantity: quantity
  };
  this.Stockportfolio.push(boughtStock);
  console.log(this.Stockportfolio);

}

getSelectedstock() {
  return this.Selectedstock;

}
}
