import { BondslistService } from './../bondslist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addbond',
  templateUrl: './addbond.component.html',
  styleUrls: ['./addbond.component.css']
})
export class AddbondComponent implements OnInit {

 BondlistService: BondslistService;

  constructor(BondlistService: BondslistService) {
    this.BondlistService = BondlistService;
   }

  ngOnInit() {
  }

  onSubmit(addbond) {
    if (addbond.invalid) {
      return;
    }
    console.log(addbond.value);
    this.BondlistService.AddBond(
      addbond.value.Bondname,
      addbond.value.Price,
      addbond.value.Ticker,
      addbond.value.Rate,
      addbond.value.Maturity,
      addbond.value.Rating,
        );
        addbond.reset();

}
}
