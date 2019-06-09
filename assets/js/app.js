// @TODO: YOUR CODE HERE!
var newsdata=[];

d3.csv("./assets/data/data.csv", function(error, newsdata){
    if (error) return console.warn(error);
newsdata.forEach(function(d){
    d.age = +d.age;
    d.healthcare = +d.healthcare;
    console.log(d);
    //console.log(newsdata);
});



})

var svgHeight = 400;
var svgWidth = 1000;

// margins
var margin = {
  top: 50,
  right: 50,
  bottom: 50,
  left: 50
};

// chart area minus margins
var chartHeight = svgHeight - margin.top - margin.bottom;
var chartWidth = svgWidth - margin.left - margin.right;

// create svg container
var svg = d3.select("#scatter").append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

// shift everything over by the margins
var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

//scale y to chart height
var yScale = d3.scaleLinear()
    .domain([0,d3.max(newsdata, data => data.healthcare)])
    .range([0,chartHeight]);

var xScale = d3.scaleLinear()
        .domain([0,d3.max(newsdata, data => data.age)])
        .range([0,chartWidth]);

var bottomAxis = d3.axisBottom(xScale);
var leftAxis = d3.axisLeft(yScale);

chartGroup.append("g")
    .classed("axis", true)
    .call(leftAxis);

  // Append an SVG group element to the SVG area, create the bottom axis inside of it
  // Translate the bottom axis to the bottom of the page
  chartGroup.append("g")
    .classed("axis", true)
    .attr("transform", "translate(0, " + chartHeight + ")")
    .call(bottomAxis);

      
    



    
  

  // draw dots
  svg.selectAll(".StateCircle")
      .data(newsdata)
    .enter().append("circle")
      .attr("class", "dot")
      .attr("r", 3.5)
      .attr("cx", xMap)
      .attr("cy", yMap);
      
      







// // scale x to chart width
// var xScale = d3.scaleBand()
//   .domain(d3.newsdata.age)
//   .range([0, chartWidth])
//   .padding(0.05);

// console.log(xScale.bandwidth());

// // create axes
// var yAxis = d3.axisLeft(yScale);
// var xAxis = d3.axisBottom(xScale);

// // set x to the bottom of the chart
// chartGroup.append("g")
//   .attr("transform", `translate(0, ${chartHeight})`)
//   .call(xAxis);

// // set y to the y axis
// // This syntax allows us to call the axis function
// // and pass in the selector without breaking the chaining
// // chartGroup.append("g")
// //   .call(yAxis);
  
// /* Note: The above code is equivalent to this:*/
//     var g = chartGroup.append("g");

//     yAxis(g);

// // Append Data to chartGroup
// chartGroup.selectAll(".bar")
//   .data(dataArray)
//   .enter()
//   .append("rect")
//   .classed("bar", true)
//   .attr("x", (d, i) => xScale(dataCategories[i]))
//   .attr("y", d => yScale(d))
//   .attr("width", xScale.bandwidth())
//   .attr("height", d => chartHeight - yScale(d));
