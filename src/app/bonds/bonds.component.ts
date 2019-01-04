import { BondslistService } from './../bondslist.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bonds',
  templateUrl: './bonds.component.html',
  styleUrls: ['./bonds.component.css']
})
export class BondsComponent implements OnInit {


  bonds = [];
  BondslistService: BondslistService;
  subscription;


  constructor( BondslistService: BondslistService) {
this.BondslistService = BondslistService;
 }
 ngOnInit() {


    this.BondslistService.FetchBonds();

    this.subscription = this.BondslistService.bonds.subscribe(() => {
      this.bonds = this.BondslistService.GetBonds();
    });
  }


  }


