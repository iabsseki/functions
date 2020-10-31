function yearlyCost(miles, cost, rating) {
  return ((miles * cost) / rating).toFixed(2);
}

var promptUser = function () {
  var miles = Number(prompt("Enter the number of miles per year:"));
  var cost = Number(prompt("Enter the cost of gallon"));
  document.write(
    "To drive a car with an MPG rating of 12 for " +
      miles +
      " at $" +
      cost +
      " per gallon would cost " +
      yearlyCost(miles, cost, 12)
  );
  document.write(
    "<br>To drive a car with an MPG rating of 17 for " +
      miles +
      " at $" +
      cost +
      " per gallon would cost " +
      yearlyCost(miles, cost, 17)
  );

  document.write(
    "<br>To drive a car with an MPG rating of 26 for " +
      miles +
      " at $" +
      cost +
      " per gallon would cost " +
      yearlyCost(miles, cost, 26)
  );

  document.write(
    "<br>To drive a car with an MPG rating of 29 for " +
      miles +
      " at $" +
      cost +
      " per gallon would cost " +
      yearlyCost(miles, cost, 29)
  );
};

// prompt user
promptUser();

// repeat
document.getElementById("editButton").addEventListener("click", function () {
  promptUser();
});
