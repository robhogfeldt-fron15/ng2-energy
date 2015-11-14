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
var HomeTest = (function () {
    function HomeTest(energyService) {
        this.energyService = energyService;
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
    HomeTest.prototype.onClick = function () {
        var _this = this;
        // Request daily data 30 days back
        var granularity = 'day';
        var now = new Date();
        var thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        // Create a period with day granularity between 30 days ago and today
        var period = dateUtil_1.getPeriod([thirtyDaysAgo, now], granularity);
        this.consumption = this.energyService.getRange(period)
            .subscribe(function (res) { return _this.consumption = res.data; }, function (err) { return console.log(err); }, function () { return console.log(_this.consumption); });
    };
    HomeTest = __decorate([
        angular2_1.Component({
            selector: "homeTest"
        }),
        angular2_1.View({
            directives: [angular2_1.CORE_DIRECTIVES],
            template: '<h1>[Från annan komponent, kolla om denna har tillgån till värdena i servicen.] {{consumption | json}}</h1> <button on-click=onClick()>Klick</button>'
        }), 
        __metadata('design:paramtypes', [energy_service_1.EnergyService])
    ], HomeTest);
    return HomeTest;
})();
exports.HomeTest = HomeTest;
//# sourceMappingURL=homestest.js.map