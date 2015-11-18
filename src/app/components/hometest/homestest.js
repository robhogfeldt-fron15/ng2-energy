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
var energy_service_1 = require('../../services/energy-service');
var dateUtil_1 = require('../../utils/dateUtil');
var charts_1 = require('../charts/charts');
var HomeTest = (function () {
    function HomeTest(energyService) {
        this.energyService = energyService;
    }
    // Daily data 30 days back
    HomeTest.prototype.onDaysClick = function () {
        var _this = this;
        var granularity = 'day';
        var now = new Date();
        var thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 14);
        var period = dateUtil_1.getPeriod([thirtyDaysAgo, now], granularity);
        this.consumption = this.energyService.getRange(period, granularity)
            .subscribe(function (res) { return _this.consumption = res.data; }, function (err) { return console.log(err); }, function () { return _this.checkValues(_this.consumption[0].periods[0].energy); });
    };
    // Monthly data 12 months back
    HomeTest.prototype.onMonthsClick = function () {
        var _this = this;
        var granularity = 'month';
        var now = new Date();
        var twelveMonthsAgo = new Date();
        twelveMonthsAgo.setMonth(twelveMonthsAgo.getMonth() - 12);
        var period = dateUtil_1.getPeriod([twelveMonthsAgo, now], granularity);
        console.log(period);
        this.consumption = this.energyService.getRange(period, granularity)
            .subscribe(function (res) { return _this.consumption = res.data; }, function (err) { return console.log(err); }, function () { return _this.checkValues(_this.consumption[0].periods[0].energy); });
    };
    // Total consumption/cost
    HomeTest.prototype.checkValues = function (param) {
        var json = JSON.parse(localStorage.getItem("price"));
        var myPrice = parseFloat(json["price"]);
        console.log(this.consumption[0].periods[0].energy);
        var total = param.reduce(function (a, b) {
            return a + b;
        });
        var myDate = new Date();
        this.dataset = param.map(function (v, i) {
            return { key: myDate.setDate(myDate.getDate() + i), value: v };
        });
    };
    HomeTest = __decorate([
        angular2_1.Component({
            selector: "homeTest",
        }),
        angular2_1.View({
            directives: [angular2_1.CORE_DIRECTIVES, charts_1.BarGraph],
            template: "\n  <button class=\"btn btn-success\"  (click)=\"onMonthsClick()\">12Months</button><button class=\"btn btn-success\"  (click)=\"onDaysClick()\">30Days</button>\n    <bar-graph id=\"bar-graph\" [graphdata]=\"dataset\"></bar-graph>\n  "
        }), 
        __metadata('design:paramtypes', [energy_service_1.EnergyService])
    ], HomeTest);
    return HomeTest;
})();
exports.HomeTest = HomeTest;
//# sourceMappingURL=homestest.js.map