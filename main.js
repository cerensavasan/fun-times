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
  	.attr("cx", function(d) { return d * 10; })
    .attr("cy", function(d) { return d * 10; })
    .attr("r", radius);

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
				normalized_point = (data_point/d3.max(d)) * 2 * Math.PI;
				x_coord = Math.round(Math.cos(normalized_point) * 100) + 100;
				y_coord = Math.round(Math.sin(normalized_point) * 100) + 100;
				result +=  x_coord + "," + y_coord + " "; 
			});

			return result;
		})
		.attr("transform", "translate(160,10)");
