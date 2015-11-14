import { Component, View } from 'angular2/angular2';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
import { CustomersComponent } from '../customers/customers-component';
import { OrdersComponent } from '../orders/orders-component';
import { HomeComponent } from '../home/home-component';
import { HomeTest } from '../hometest/homestest';

@Component({ 
  selector: 'app',
  template: `<router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES],
})
@RouteConfig([
   { path: '/',              as: 'Customers',  component: CustomersComponent },
  { path: '/orders/:id',    as: 'Orders',     component: OrdersComponent    },
  { path: '/home',          as: 'Home',       component: HomeComponent    },
  { path: '/homeTest',          as: 'HomeTest',       component: HomeTest    }
])
export class AppComponent {

}
