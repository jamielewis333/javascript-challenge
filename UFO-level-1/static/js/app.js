// from data.js
var UFO_sitings = data;

// YOUR CODE HERE!

//render full table
var tbody = d3.select("tbody");

function createTable(table) {
    tbody.html("");
    table.forEach((ufo) => {
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
};

createTable(UFO_sitings);

//Event handler - Filter by Date
var button = d3.select("#filter-btn");

button.on("click", function() {
  
    // Prevent the page from refreshing
  d3.event.preventDefault(); 

  // Select the input element 
  var inputElement = d3.select("#datetime");

  // Get the value of the input element
  var inputValue = inputElement.property("value");
  console.log(inputValue);

  // In input value is blank, render full table
  if (inputValue == "" ) {
    console.log("No Input Value Provided"); 
    createTable(UFO_sitings);
  } else { 
    // Filter by input value and render filtered table
    var filteredData = UFO_sitings.filter(ufo => ufo.datetime === inputValue);
    console.log(filteredData); 
    createTable(filteredData);

  }

  

});