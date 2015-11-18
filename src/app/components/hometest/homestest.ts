import {Component, View, CORE_DIRECTIVES, Directive, Inject, Attribute, ElementRef, FORM_DIRECTIVES,EventEmitter} from 'angular2/angular2';
import { Router, RouterLink } from 'angular2/router';
import { EnergyService } from '../../services/energy-service';
import { getPeriod } from '../../utils/dateUtil';
import {Http, Headers} from 'angular2/http';
import { BarGraph } from '../charts/charts';
import { ObservableWrapper } from 'angular2/src/facade/async';
import { } from 'angular2/core';

declare var d3:any;


@Component({
  selector: "homeTest",

})
@View({
  directives: [CORE_DIRECTIVES, BarGraph],	
   
    template: `
  <button class="btn btn-success"  (click)="onMonthsClick()">12Months</button><button class="btn btn-success"  (click)="onDaysClick()">30Days</button>
    <bar-graph id="bar-graph" [graphdata]="dataset"></bar-graph>
  `

})
export class HomeTest {
  meter: any;
  consumption: any;
  elementRef: any;
  dataset: Array<Object>;
  constructor(private energyService: EnergyService) {
     
  }
  
  
// Daily data 30 days back
  onDaysClick() {
    var granularity = 'day';
    var now = new Date();
    var thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 14);
  
    var period = getPeriod([thirtyDaysAgo, now], granularity);
    this.consumption = this.energyService.getRange(period, granularity)
      .subscribe(
      res => this.consumption = res.data,
      err => console.log(err),
      () => this.checkValues(this.consumption[0].periods[0].energy)
      )
  }

// Monthly data 12 months back
  onMonthsClick() {
   
    var granularity = 'month';
    var now = new Date();
    var twelveMonthsAgo = new Date();
    twelveMonthsAgo.setMonth(twelveMonthsAgo.getMonth() - 12);

    var period = getPeriod([twelveMonthsAgo, now], granularity);
    console.log(period);
    this.consumption = this.energyService.getRange(period, granularity)
      .subscribe(
      res => this.consumption = res.data,
      err => console.log(err),
      () => this.checkValues(this.consumption[0].periods[0].energy)
      )

  }

// Total consumption/cost
  checkValues(param) {
    var json = JSON.parse(localStorage.getItem("price"));
    var myPrice = parseFloat(json["price"])
    console.log(this.consumption[0].periods[0].energy);
    
    var total = param.reduce(function(a, b) {
      return a + b;
    });
     
     var myDate= new Date();
     this.dataset = param.map(function(v, i) {
  return { key: myDate.setDate(myDate.getDate()+i), value: v };
});


  }



    

