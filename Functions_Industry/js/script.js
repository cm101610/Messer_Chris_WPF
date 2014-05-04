//Chris Messer - Assignment: Conditionals - Industry
//Determining the production cost base upon client input

//Begin with the function that will be repeated 3 times
function adSales(){
	var sales = prompt("How many ads would you like to include in your monthly advertising package?");
	var cost = alert("You have selected " + sales + " ads for the monthly package.  Each ad is $150 each.");
	var total = (sales * 150);
	console.log("Your total cost for the monthly production of your advertising campaign is $" + total + ".");
}

//Need validation added to determine if the customer input a number.
	if(!isNaN(sales)){
	}else{
		//The user did not type in a number
		//Prompt again to type in a number
		//console.log("ELSE Statement");
		sales=prompt("You didn't enter a number to represent the number of ads you wish to add to your montly procudtion cost.\n\nPlease enter a number...");
	}
//console.log(total);
adSales();
adSales();
adSales();