import { StocklistService } from './../stocklist.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {



stocks = [];
  StocklistService: StocklistService;
  loaded = 'all';
  subscription;

  constructor( StocklistService: StocklistService) {
this.StocklistService = StocklistService;
   }

  ngOnInit() {
    this.StocklistService.FetchStocks();

    this.subscription = this.StocklistService.stocks.subscribe(() => {
      this.stocks = this.StocklistService.GetStock(this.loaded);
    });
  }


  }
