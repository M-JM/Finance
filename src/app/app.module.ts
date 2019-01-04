import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { StocksComponent } from './stocks/stocks.component';
import { BondsComponent } from './bonds/bonds.component';
import {UserprofileService} from './userprofile.service';
import {HttpModule} from '@angular/http';
import {StocklistService} from './stocklist.service';
import { StockitemComponent } from './stockitem/stockitem.component';
import { AddstockComponent } from './addstock/addstock.component';
import { BondslistService } from './bondslist.service';

const routes = [

  {path: 'Userprofile',
  component: UserprofileComponent},
  {path: 'Dashboard', component: DashboardComponent },
  {path: 'Portfolio', component: PortfolioComponent },
  {path: 'Bonds', component: BondsComponent},
  {path: 'Stocks', component: StocksComponent},
  {path: '**', redirectTo : '/Dashboard' },

];


@NgModule({
  declarations: [
    AppComponent,
    UserprofileComponent,
    DashboardComponent,
    NavbarComponent,
    PortfolioComponent,
    StocksComponent,
    BondsComponent,
    StockitemComponent,
    AddstockComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    FormsModule,
    HttpModule,
  ],
  providers: [UserprofileService, StocklistService, BondslistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
