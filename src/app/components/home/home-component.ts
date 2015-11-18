import {Component, View, CORE_DIRECTIVES, FORM_DIRECTIVES, FormBuilder, ControlGroup} from 'angular2/angular2';
import { Router, RouterLink } from 'angular2/router';

// import {status, json} from '../../utils/fetch';
import { EnergyService } from '../../services/energy-service';
// import { getPeriod } from '../../utils/date';
// import {charts} from 'ng2-charts';
import {Http, Headers} from 'angular2/http';
import { ObservableWrapper } from 'angular2/src/facade/async';

import { HomeTest } from '../hometest/homestest';
import { BarGraph } from '../charts/charts';


@Component({
  selector: 'home',
  providers: [EnergyService],
})
@View({
  directives: [CORE_DIRECTIVES, HomeTest, FORM_DIRECTIVES, BarGraph],
  templateUrl: 'app/components/home/home-component.html',
  // styles: [ styles ]
})
export class HomeComponent {
  price: string;
  meter: any;
  year: any;
  selectedMeter;
  constructor(private energyService: EnergyService) {

    var json = JSON.parse(localStorage.getItem("price"));
    this.price = json["price"]

  }

  onSubmit(value) {
    var stringKey = 'price';
    localStorage.setItem("price", JSON.stringify(value));
    var json = JSON.parse(localStorage.getItem("price"));
    this.price = json["price"]
  }
  onInit() {

    this.energyService.meter
      .subscribe(
      res => this.meter = res.data,
      err => console.log(err),
      () => console.log(this.meter)
      );

    console.log(this.meter);

  }

  printMeterInfo() {

    if (this.meter) {
      return "<b>Address</b>:</br> " + this.meter[0].address +
        "<br><b>Ean:</b></b> " + this.meter[0].ean +
        "<br><b>Elpris:</b></b> " + this.price + " öre/Kwh";

    }

  }}