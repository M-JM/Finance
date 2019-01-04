import { StocklistService } from './../stocklist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addstock',
  templateUrl: './addstock.component.html',
  styleUrls: ['./addstock.component.css']
})
export class AddstockComponent implements OnInit {

  StocklistService: StocklistService;

  constructor( StocklistService: StocklistService) {
    this.StocklistService = StocklistService;
  }
  ngOnInit() {
  }

  onSubmit(submittedForm) {
    if (submittedForm.invalid) {
      return;
    }
    console.log(submittedForm.value);
    this.StocklistService.AddStock(submittedForm.value.stockname, submittedForm.value.Price, submittedForm.value.Ticker);
    submittedForm.reset();
  }

}
