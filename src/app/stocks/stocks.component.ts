import { StocklistService } from './../stocklist.service';
import { Component, OnInit } from '@angular/core';
import { BuyService } from '../buy.service';


@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {

  selectedStock = [];
  stocks = [];
  StocklistService: StocklistService;
  BuyService: BuyService;
  subscription;

  constructor( StocklistService: StocklistService,
    BuyService: BuyService) {
this.StocklistService = StocklistService;
this.BuyService =  BuyService;

   }

  ngOnInit() {
    this.stocks = this.StocklistService.GetStock();
    this.subscription = this.StocklistService.stocks.subscribe(() => {
      this.stocks = this.StocklistService.GetStock();
    });
  }

  checking(index) {
    this.BuyService.Selectedstock = this.stocks[index];
    console.log(this.BuyService.Selectedstock);

  }
}
