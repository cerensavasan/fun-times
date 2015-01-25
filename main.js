var data = [4, 8, 15, 16, 23, 42];

var width = 500,
	height = 500
	radius = 3;

var x = d3.scale.linear()
    .domain([0, height])
    .range([0, width]);

var chart = d3.select(".chart")
    .attr("width", width)
    .attr("height", height);

var circle = chart.selectAll("circle")
    .data(data)
  	.enter().append("circle")
  	.attr("cx", function(d) { return d * 10; }) //multiply value by ten so differences are more visible
    .attr("cy", function(d) { return d * 10; })
    .attr("r", radius)
    .attr("fill", function(d) { return "rgb(0,0," + (255 - Math.round(3.5 * d)) + ")"; }); //alter color based on value

var polyline = chart.selectAll("polyline")
	.data(data)
	.enter().append("polyline")
		.attr("points", function(d, i) {
			var result = "";
			var x_coord = i * 10 + 6;
			
			result += x_coord + ",0 ";
			result += x_coord + "," + d * 10

			return result;
		});

var polygon = chart.selectAll("polygon")
	.data([data])
	.enter().append("polygon")
		.attr("points", function(d) {
			var result = "";
			d.map(function(data_point) {
				normalized_point = (data_point/d3.max(d)) * 2 * Math.PI; // normalize data point so the greatest value is no more than 2pi
				x_coord = Math.round(Math.cos(normalized_point) * 100) + 100;
				y_coord = Math.round(Math.sin(normalized_point) * 100) + 100;
				result +=  x_coord + "," + y_coord + " "; 
			});

			return result;
		})
		.attr("transform", "translate(160,10)"); //hard coded to move polygon away from other shapes
