//Your code here


// JS Function Lab 1

// Forget how old you are? Calculate it.

// Write a function called calculateAge that:
// Takes 2 arguments: birth year, current year
// Calculates the 2 possible ages based on those years
// Outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript 
// instead of passing it in.


var calculateAge = function(birth_year, current_year) {
	var option1 = current_year - birth_year ;
	var option2 = option1 - 1 ;
	alert("You are either " + option1 + " or " + option2); 
}

calculateAge(1971, 2014);

// with Bonus
calculateAge(1971, new Date().getFullYear() );