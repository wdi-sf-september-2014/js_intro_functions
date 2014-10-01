var myAge = function(birth) {
    var time = new Date();
    var year = time.getFullYear();
    if (year - birth > 0) {
    	return console.log("You are  either " + (year - birth) + " or " + (year - birth - 1) + " years old.");
    }
    else {
    	return console.log("You haven't been conceived yet.");
    }
};

myAge(1986);

myAge(1990);

myAge(2016);