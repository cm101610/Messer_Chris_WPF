//Chris Messer, April 17, 2014, Assignment: Conditionals - Industry
//Budgeting money for advertising campaign
//Determining the amoutn of money a business is looking to spend

//clientSpend prompt asking user for what they are looking to spend
var clientSpend = 270
var standardSpend = 250
var deluxeSpend = 350

if(clientSpend >= deluxeSpend){
	//Production can begin
	console.log("Let's get the ball rolling and start the production!!");

}else if (clientSpend >= standardSpend){
	//Production can begin, but will be limited
	console.log("Based on you budget, we can begin production, but with limited production resources.");
}else{
	//Sorry, your budget is below the standard production package, not recommended
	console.log("We're sorry, but your budget is below our standard production cost.  We are more than happy to discuss some alternative options with you.");
}