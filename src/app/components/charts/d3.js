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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var angular2_1 = require('angular2/angular2');
var angular2_2 = require('angular2');
var d3 = require('d3');
var BarGraph = (function () {
    function BarGraph(elementRef, width, height) {
        var el = elementRef.domElement;
        var graph = d3.select(el);
        this.divs = graph.
            append('div').
            attr({
            'class': 'chart'
        }).
            style({
            'width': width + 'px',
            'height': height + 'px',
        }).
            selectAll('div');
    }
    BarGraph.prototype.render = function (newValue) {
        if (!newValue)
            return;
        this.divs.data(newValue).enter().append('div')
            .transition().ease('elastic')
            .style('width', function (d) { return d + '%'; })
            .text(function (d) { return d + '%'; });
    };
    BarGraph.prototype.onChange = function () {
        this.render(this.data);
    };
    BarGraph = __decorate([
        angular2_1.Directive({
            selector: 'bar-graph',
            lifecycle: [angular2_1.onChange],
            properties: ['data']
        }),
        __param(0, angular2_2.Inject(angular2_1.ElementRef)),
        __param(1, angular2_1.Attribute('width')),
        __param(2, angular2_1.Attribute('height')), 
        __metadata('design:paramtypes', [angular2_1.ElementRef, String, String])
    ], BarGraph);
    return BarGraph;
})();
var App = (function () {
    function App() {
        this.graphData = [10, 20, 30, 40, 60];
    }
    App = __decorate([
        angular2_1.Component({
            selector: 'app'
        }),
        angular2_1.View({
            directives: [BarGraph],
            template: "\n  <h1 class=\"title\">Angular 2 + d3</h1>\n  <bar-graph\n    bind-data=\"graphData\"\n    width=\"500\"\n    height=\"130\"\n  >\n  </bar-graph>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
//# sourceMappingURL=d3.js.map