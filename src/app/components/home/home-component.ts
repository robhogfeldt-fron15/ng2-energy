import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';
import { Router, RouterLink } from 'angular2/router';
// import {status, json} from '../../utils/fetch';
import { EnergyService } from '../../services/energy-service';
// import { getPeriod } from '../../utils/date';
// import {charts} from 'ng2-charts';
import {Http, Headers} from 'angular2/http';
import { ObservableWrapper } from 'angular2/src/facade/async';

import { HomeTest } from '../hometest/homestest';


@Component({
  selector: 'home',
  providers: [EnergyService],
})
@View({
  directives: [CORE_DIRECTIVES, HomeTest],
  templateUrl: 'app/components/home/home-component.html',
  // styles: [ styles ]
})
export class HomeComponent {
  
  meter: any;
  year: any;
  visService;
  selectedMeter;
  constructor(private energyService: EnergyService) {

 
 
}

 onInit() {
   
    //  // Request daily data 30 days back
    // var granularity = 'day';
    // var now = new Date();
    // var thirtyDaysAgo = new Date();
    // thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    // // Create a period with day granularity between 30 days ago and today
    // var period = getPeriod([thirtyDaysAgo, now], granularity);
    // console.log(period);
    
  //  this.energyService.getYear().then((meter) => {
  //           this.meter = meter;
  //           console.log(this.meter);
  //       });       
   
  //   this.energyService.getYear().then((year) => {
  //           this.year = year;
  //           console.log(this.year);
  //       }); 
        
 this.energyService.meter
      .subscribe(
        res => this.meter = res.data,
        err => console.log(err),
        () => console.log(this.meter)    
    );
 
console.log(this.meter);

  }
  
  printMeterInfo(){
    
      if(this.meter){
       return "<b>Address</b>:</br> " + this.meter[0].address + 
              "<br><b>Ean:</b></b> " + this.meter[0].ean;
       
      }
  
  
  // Consumptions.get = function get(id, granularity, ranges, metrics) {
  //   metrics = metrics || ['energy'];
  //   metrics = angular.isArray(metrics) ? metrics : [metrics];
  //   ranges = angular.isArray(ranges) ? ranges : [ranges];

  //   return energimolnetAPI.request({
  //     method: 'GET',
  //     url: [this._config.default, id, granularity, ranges.join('+')].join('/'),
  //     params: {
  //       metrics: metrics.join(',')
  //     }
  //   });
  // };

  // return Consumptions;
}