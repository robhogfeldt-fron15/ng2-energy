import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';
import { Router, RouterLink } from 'angular2/router';
import { EnergyService } from '../../services/energy-service';
import { getPeriod } from '../../utils/dateUtil';
import {Http, Headers} from 'angular2/http';
import { ObservableWrapper } from 'angular2/src/facade/async';


@Component({
	selector: "homeTest"
})
@View({
 directives: [CORE_DIRECTIVES],	
 template: 
 '<h1>[Från annan komponent, kolla om denna har tillgån till värdena i servicen.] {{consumption | json}}</h1> <button on-click=onClick()>Klick</button>'
 
})
export class HomeTest {
	
	meter: any;
	consumption: any;
	constructor(private energyService: EnergyService){
		console.log('homeTest');
		
	}
	
	// onClick(){
  //  this.energyService.meter
  //     .subscribe(
  //       res => this.meter = res.data,
  //       err => console.log(err),
  //       () => console.log(this.meter)    
  //   );
 
  //       console.log(this.meter);

  // }
  
  onClick(){
      // Request daily data 30 days back
    var granularity = 'day';
    var now = new Date();
    var thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    // Create a period with day granularity between 30 days ago and today
    var period = getPeriod([thirtyDaysAgo, now], granularity);
    this.consumption = this.energyService.getRange(period)
       .subscribe(
        res => this.consumption = res.data,
        err => console.log(err),
        () => console.log(this.consumption)    
    )}}
    
  
     

  
