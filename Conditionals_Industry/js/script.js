//Chris Messer, April 17, 2014, Assignment: Conditionals - Industry
//Budgeting money for advertising campaign
//Determining the amoutn of money a business is looking to spend

//clientSpend prompt asking user for what they are looking to spend
var clientSpend = prompt("Hello, how much do you have budgeted for your production cost?");
//code tested after changing to prompt and still working correctly based on input from customer.
var standardSpend = 250
var deluxeSpend = 350

//Need validation added to determine if the customer input a number.
if(!isNan(clientSpend)){
	console.log("IF Statement");
if(!isNaN(clientSpend)){
	//console.log("IF Statement");
}else{
	//The user did not type in a number
	//Prompt again to type in a number
	console.log("ELSE Statement");
	//console.log("ELSE Statement");
	clientSpend=prompt("You didn't enter a number to represent your budget.\n\nPlease enter a number to let us know your current spending budget.");
}

if(clientSpend >= deluxeSpend){
	//Production can begin
	console.log("Let's get the ball rolling and start the production!!");

}else if (clientSpend >= standardSpend){
	//Production can begin, but will be limited
	console.log("Based on you budget, we can begin production, but with limited production resources.");
}else{
	//Sorry, your budget is below the standard production package, not recommended
	console.log("We're sorry, but your budget is below our standard production cost.  We are more than happy to discuss some alternative options with you.");
} //TESTED, code working correctly.