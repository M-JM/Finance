import { Component, OnInit, DoCheck } from '@angular/core';
import { BuyService } from './../buy.service';

@Component({
  selector: 'app-buystocks',
  templateUrl: './buystocks.component.html',
  styleUrls: ['./buystocks.component.css']
})
export class BuystocksComponent implements OnInit, DoCheck {

  selectedStock = {
    stockname: '',
    price: '',
    ticker: '',
    quantity: '',
};
BuyService: BuyService;

constructor( BuyService: BuyService) {
  this.BuyService = BuyService;
   }

ngOnInit() {
}
ngDoCheck() {
  const changes = this.BuyService.getSelectedstock();
  if (changes) {
    this.selectedStock = this.BuyService.getSelectedstock();
  }
}

onSubmit(buystock) {
  if (buystock.invalid) {
    return;
  }
  this.BuyService.BuyStock(
    this.selectedStock.stockname,
    this.selectedStock.price,
    this.selectedStock.ticker,
    buystock.value.quantity,
      );
      buystock.reset();

}
}
