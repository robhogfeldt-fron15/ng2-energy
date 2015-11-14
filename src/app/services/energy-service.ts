import { Http } from 'angular2/http';
import { Injectable } from 'angular2/angular2';
import { ObservableWrapper } from 'angular2/src/facade/async';
// declare var fetch, Zone;


@Injectable()
export class EnergyService {
    Observable: any;
    meterId: string;
    consumptions: any;
    baseUrl: string;
    token: string;
    meter: any;
    year: any;
    constructor(public http: Http) {
        this.meterId = "557a831e4929ce5f008b6427";
        this.baseUrl = 'https://app.energimolnet.se/api/v2/';
        this.token = '?access_token=32b02611862467b7633e918595b64b828baf5ebea1a0da932834d456c5f7';
        this.meter = http.get(this.baseUrl + "meters" + this.token).map(res => res.json());
        
        }
        
         logError(err) {
    console.error('There was an error: ' + err);
  }
  
//   getRange(dateRange){
//      this.consumptions = this.http.get(this.baseUrl + 'consumptions/557a831e4929ce5f008b6427/day/' + dateRange + this.token).map(res => res.json())
//               .subscribe(
//         res => this.consumptions = res.data,
//         err => console.log(err),
//         () => console.log(this.consumptions)    
//     )}}
    
    getRange(dateRange): Observable<UserDTO> {
     return this.http.get(this.baseUrl + 'consumptions/557a831e4929ce5f008b6427/day/' + dateRange + this.token).map(res => res.json());
    }};
           
    
    
      
  
  
  
  
 