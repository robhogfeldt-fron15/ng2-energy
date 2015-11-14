var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
// import {status, json} from '../../utils/fetch';
var energy_service_1 = require('../../services/energy-service');
var homestest_1 = require('../hometest/homestest');
var HomeComponent = (function () {
    function HomeComponent(energyService) {
        this.energyService = energyService;
    }
    HomeComponent.prototype.onInit = function () {
        //  // Request daily data 30 days back
        // var granularity = 'day';
        // var now = new Date();
        // var thirtyDaysAgo = new Date();
        // thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        // // Create a period with day granularity between 30 days ago and today
        // var period = getPeriod([thirtyDaysAgo, now], granularity);
        // console.log(period);
        var _this = this;
        //  this.energyService.getYear().then((meter) => {
        //           this.meter = meter;
        //           console.log(this.meter);
        //       });       
        //   this.energyService.getYear().then((year) => {
        //           this.year = year;
        //           console.log(this.year);
        //       }); 
        this.energyService.meter
            .subscribe(function (res) { return _this.meter = res.data; }, function (err) { return console.log(err); }, function () { return console.log(_this.meter); });
        console.log(this.meter);
    };
    HomeComponent.prototype.printMeterInfo = function () {
        if (this.meter) {
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
    };
    HomeComponent = __decorate([
        angular2_1.Component({
            selector: 'home',
            providers: [energy_service_1.EnergyService],
        }),
        angular2_1.View({
            directives: [angular2_1.CORE_DIRECTIVES, homestest_1.HomeTest],
            templateUrl: 'app/components/home/home-component.html',
        }), 
        __metadata('design:paramtypes', [energy_service_1.EnergyService])
    ], HomeComponent);
    return HomeComponent;
})();
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home-component.js.map