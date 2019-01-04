import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Bond, BondslistService } from '../bondslist.service';


@Component({
  selector: 'app-bonds',
  templateUrl: './bonds.component.html',
  styleUrls: ['./bonds.component.css']
})
export class BondsComponent implements OnInit {
  bonds: any[];


  constructor( private _BondlistService: BondslistService) {
this._BondlistService = _BondlistService;
 }
 ngOnInit() {
}

}
