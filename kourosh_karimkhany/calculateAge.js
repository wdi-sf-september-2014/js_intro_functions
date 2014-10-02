var calculateAge = function(by, cy) {
	older = cy - by;
	younger = cy - by - 1;
	console.log("You are either " + older + " or " + younger + ".");
}

calculateAge(1969, 2014);
calculateAge(1949, 2014);
calculateAge(2012, 2014);

calculateAge(1900, (new Date().getFullYear()));