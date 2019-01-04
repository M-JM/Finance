import { StocklistService } from './../stocklist.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-stockitem',
  templateUrl: './stockitem.component.html',
  styleUrls: ['./stockitem.component.css']
})
export class StockitemComponent implements OnInit {

  @Input() stocks;
  StocklistService: StocklistService;

  constructor( StocklistService: StocklistService) {
    this.StocklistService = StocklistService;
   }

  ngOnInit() {
  }

}
