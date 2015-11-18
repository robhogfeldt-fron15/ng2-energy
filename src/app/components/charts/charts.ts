import {Component, View, CORE_DIRECTIVES, Directive, Inject, Attribute, ElementRef, Input, Output, EventEmitter, OnChanges, SimpleChange} from 'angular2/angular2';
import { Router, RouterLink } from 'angular2/router';
import { EnergyService } from '../../services/energy-service';
import { getPeriod } from '../../utils/dateUtil';
import {Http, Headers} from 'angular2/http';
import { ObservableWrapper } from 'angular2/src/facade/async';

declare var d3:any;

@Component({
    selector:   'bar-graph',
  
   
})
@View({
    template: `
        <h1>Bargraph</h1>
    
    `,
 
})
export class BarGraph implements OnChanges{
 
  @Input() graphdata: any;
    

  data: Array<number>;
  divs: any;
  dataset: any;
  
	



 
 onChanges(changes: {[propName: string]: SimpleChange}) {
    console.log('onChanges - myProp = ' + changes['graphdata'].currentValue);
    this.dataset = [];
    this.dataset = changes['graphdata'].currentValue;
      var w = 600;
    var h = 250;
    


    var elements = document.getElementsByClassName("myBar");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    
}
    
    
  
  
    if(this.graphdata){
      this.dataset = this.graphdata;
    } else {
      this.dataset = [];
    }


    
    
var xScale = d3.scale.ordinal()
				.domain(d3.range(this.dataset.length))
				.rangeRoundBands([0, w], 0.05); 

var yScale = d3.scale.linear()
				.domain([0, d3.max(this.dataset, function(d) {return d.value;})])
				.range([0, h]);

var key = function(d) {
	return d.key;
};

var tooltip = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden")
    .text("a simple tooltip");

//Create SVG element
var svg = d3.select("bar-graph")
			.append("svg")
      .attr("class", "myBar")
			.attr("width", w)
			.attr("height", h);

//Create bars
svg.selectAll("rect")

   .data(this.dataset, key)
   .enter()
   .append("rect")
   .attr("x", function(d, i) {
		return xScale(i);
   })
   
   .attr("y", function(d) {
		return h - yScale(d.value);
   })
   .attr("width", xScale.rangeBand())
   .attr("height", function(d) {
		return yScale(d.value);
   })
   .attr("fill", "teal")
   .on("mouseover", function(){return tooltip.style("visibility", "visible");})
	.on("mousemove", function(){return tooltip.style("top", (d3.event.y-10)+"px").style("left",(d3.event.pageX+10)+"px");})
	.on("mouseout", function(){return tooltip.style("visibility", "hidden");});

  //  .attr("fill", function(d) {
	// 	return "rgb(45, 45, " + (d.value + 2) + ")";
  //  })
 


//Create labels
svg.selectAll("text")
   .data(this.dataset, key)
   .enter()
   .append("text")
   .text(function(d) {
		return d.value;
   })
   .attr("text-anchor", "middle")
   .attr("x", function(d, i) {
		return xScale(i) + xScale.rangeBand() / 2;
   })
   .attr("y", function(d) {
		return h - yScale(d.value) + 14;
   })
   .attr("font-family", "sans-serif") 
   .attr("font-size", "11px")
   .attr("fill", "white");
   
    
  
  }
  
  
 
  
 
}
