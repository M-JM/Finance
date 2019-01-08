import { BuyService } from './../buy.service';
import { BondslistService } from './../bondslist.service';
import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-bonds',
  templateUrl: './bonds.component.html',
  styleUrls: ['./bonds.component.css'],

})
export class BondsComponent implements OnInit {

  selectedBond = [];
  bonds = [];
  BondslistService: BondslistService;
  BuyService: BuyService;
  subscription;
  searchString: string;
 


constructor( BondslistService: BondslistService, BuyService: BuyService ) {
this.BondslistService = BondslistService;
this.BuyService =  BuyService;
 }
 ngOnInit() {


    this.bonds = this.BondslistService.GetBonds();
    this.subscription = this.BondslistService.bonds.subscribe(() => {
      this.bonds = this.BondslistService.GetBonds();
    });
  }

  checking(bond) {
    this.BuyService.Selectedbond = bond;
    console.log(this.BuyService.Selectedbond);
    console.log(bond);
    console.log(Date());

}
}
