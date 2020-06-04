// YOUR CODE HERE!

// from data.js
var data = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// load the data using the fat arrow method to loop through the rows in data and load into the tbody, 
//this is to populate all data when one enters the page
data.forEach((UFO) => {
  var row = tbody.append("tr");
  Object.entries(UFO).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);


// Create a function to populate the data based on the date selected
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  var inputElement1 = d3.select("#city");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  var inputValue1 = inputElement1.property("value");

  console.log(inputValue);
  
  var filteredData = data.filter(data => data.datetime === inputValue &&  data.city === inputValue1);

  console.log(filteredData);

  // clear the previous result set
  tbody.html("");

  filteredData.forEach((UFO) => {
  var row = tbody.append("tr");
  Object.entries(UFO).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

};