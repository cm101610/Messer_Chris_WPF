//Chris Messer, April 17, 2014, Assignment: Conditionals - Wacky
//Code will determine whether or not someone can join our golf league based upon average score per round.

//Begining with golfAvg being 75 to check to see if code is working correctly.
//var golfAvg = 83

//Changed golfAvg from static number to providing a prompt for the user to enter in their own golf average.
var golfAvg = prompt("Thank you for your interest in our 2014 Golf League.\n\nPlease enter a number to represent your current average golf score per round."); //code tested, working correctly.

//Need validation added to determine if the customer input a number.
//Beginning with IF statement to determine if the information entered was a number
if(!isNaN(golfAvg)){

}else{

	//user will be prompted if they don't enter a number in the space provided.
	golfAvg=prompt("Ummm...that's not a number...perhaps your not cut out for this league after all.\n\nHere's one more chance...\n\nPlease enter a NUMBER to let us know your current average golf score per round.");
}

//Adding IF/ELSE statement to determine if the user is good enough for the league
/*if(golfAvg <= 82){
	console.log("THAT'S GREAT!!  WELCOME TO THE 2014 GOLF LEAGUE!!\n\nYour average score per round is suitable for entry.");
}else{
	console.log("THAT'S TERRIBLE!!\n\nUnfortunately, your average golf score per round is not worthy enough for our league.  Please go practice and don't come back until you're better.");
}*/

//setting up Ternary Operation to complete the code and provide the response in the console.
(golfAvg <= 82) ? console.log("THAT'S GREAT!!  WELCOME TO THE 2014 GOLF LEAGUE!!\n\nYour average score per round is suitable for entry.") : console.log("THAT'S TERRIBLE!!\n\nUnfortunately, your average golf score per round is not worthy enough for our league.  Please go practice and don't come back until you're better.");