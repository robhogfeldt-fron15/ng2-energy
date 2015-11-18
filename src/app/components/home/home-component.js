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
var charts_1 = require('../charts/charts');
var HomeComponent = (function () {
    function HomeComponent(energyService) {
        this.energyService = energyService;
        var json = JSON.parse(localStorage.getItem("price"));
        this.price = json["price"];
    }
    HomeComponent.prototype.onSubmit = function (value) {
        var stringKey = 'price';
        localStorage.setItem("price", JSON.stringify(value));
        var json = JSON.parse(localStorage.getItem("price"));
        this.price = json["price"];
    };
    HomeComponent.prototype.onInit = function () {
        var _this = this;
        this.energyService.meter
            .subscribe(function (res) { return _this.meter = res.data; }, function (err) { return console.log(err); }, function () { return console.log(_this.meter); });
        console.log(this.meter);
    };
    HomeComponent.prototype.printMeterInfo = function () {
        if (this.meter) {
            return "<b>Address</b>:</br> " + this.meter[0].address +
                "<br><b>Ean:</b></b> " + this.meter[0].ean +
                "<br><b>Elpris:</b></b> " + this.price + " öre/Kwh";
        }
    };
    HomeComponent = __decorate([
        angular2_1.Component({
            selector: 'home',
            providers: [energy_service_1.EnergyService],
        }),
        angular2_1.View({
            directives: [angular2_1.CORE_DIRECTIVES, homestest_1.HomeTest, angular2_1.FORM_DIRECTIVES, charts_1.BarGraph],
            templateUrl: 'app/components/home/home-component.html',
        }), 
        __metadata('design:paramtypes', [energy_service_1.EnergyService])
    ], HomeComponent);
    return HomeComponent;
})();
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home-component.js.map