import { Component, OnInit, DoCheck } from '@angular/core';
import { BuyService } from './../buy.service';


@Component({
  selector: 'app-buybonds',
  templateUrl: './buybonds.component.html',
  styleUrls: ['./buybonds.component.css']
})
export class BuybondsComponent implements OnInit, DoCheck {

  selectedBond = {
      bondname: '',
      price: '',
      ticker: '',
      rate: '',
      maturity: '',
      rating: '',
      quantity: '',
  };
  BuyService: BuyService;

  constructor( BuyService: BuyService) {
    this.BuyService = BuyService;
     }

  ngOnInit() {
  }
  ngDoCheck() {
    const changes = this.BuyService.getSelectedbond();
    if (changes) {
      this.selectedBond = this.BuyService.getSelectedbond();
    }
  }

  onSubmit(buybond) {
    if (buybond.invalid) {
      return;
    }
    this.BuyService.BuyBond(
      this.selectedBond.bondname,
      this.selectedBond.price,
      this.selectedBond.ticker,
      this.selectedBond.rate,
      this.selectedBond.maturity,
      this.selectedBond.rating,
      buybond.value.quantity,
        );
        buybond.reset();

}
}