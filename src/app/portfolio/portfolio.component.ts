import { BuyService } from './../buy.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

Buyservice = this.Buyservice;
bonds;
stocks;
date;

  constructor( BuyService: BuyService) {
    this.Buyservice = BuyService;
  this.date = Date();
  }

  ngOnInit() {

    this.bonds = this.Buyservice.getBondportfolio();
    this.stocks = this.Buyservice.getStockportfolio();

  }

}
