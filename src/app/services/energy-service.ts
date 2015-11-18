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
        
       
        this.meter = http.get(this.baseUrl + "meters" + this.token).map(res => res.json());   
            }  
            logError(err) {
            console.error('There was an error: ' + err);
        }
  

    
    
    // Get Range
    getRange(dateRange, granularity): Observable<UserDTO> {
     return this.http.get(this.baseUrl + 'consumptions/557a831e4929ce5f008b6427/'+ granularity +'/' + dateRange + this.token).map(res => res.json());
    }};
           
    
    
      
  
  
  
  
 