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
var http_1 = require('angular2/http');
var angular2_1 = require('angular2/angular2');
// declare var fetch, Zone;
var EnergyService = (function () {
    function EnergyService(http) {
        this.http = http;
        this.meterId = "557a831e4929ce5f008b6427";
        this.baseUrl = 'https://app.energimolnet.se/api/v2/';
        this.token = '?access_token=32b02611862467b7633e918595b64b828baf5ebea1a0da932834d456c5f7';
        this.meter = http.get(this.baseUrl + "meters" + this.token).map(function (res) { return res.json(); });
    }
    EnergyService.prototype.logError = function (err) {
        console.error('There was an error: ' + err);
    };
    //   getRange(dateRange){
    //      this.consumptions = this.http.get(this.baseUrl + 'consumptions/557a831e4929ce5f008b6427/day/' + dateRange + this.token).map(res => res.json())
    //               .subscribe(
    //         res => this.consumptions = res.data,
    //         err => console.log(err),
    //         () => console.log(this.consumptions)    
    //     )}}
    EnergyService.prototype.getRange = function (dateRange) {
        return this.http.get(this.baseUrl + 'consumptions/557a831e4929ce5f008b6427/day/' + dateRange + this.token).map(function (res) { return res.json(); });
    };
    EnergyService = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EnergyService);
    return EnergyService;
})();
exports.EnergyService = EnergyService;
;
//# sourceMappingURL=energy-service.js.map