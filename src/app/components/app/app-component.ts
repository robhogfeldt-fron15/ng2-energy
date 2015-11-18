import { Component, View } from 'angular2/angular2';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
// import { CustomersComponent } from '../customers/customers-component';
// import { OrdersComponent } from '../orders/orders-component';
import { HomeComponent } from '../home/home-component';
import { HomeTest } from '../hometest/homestest';


@Component({ 
  selector: 'app',
  template: `<router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES],
})
@RouteConfig([
   { path: '/',              as: 'Home',  component: HomeComponent },
])
export class AppComponent {

}
