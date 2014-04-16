//Chris Messer, April 17, 2014, Assignment: Conditionals - Personal
//Collecting info from prompts to determine whether to open lemonade stand or not

//prompt 1 asking user to input the current temperature
var tempOutside = prompt("What is the current temperature outside?");

//if tempOutside is greater or equal to 70 degrees, you can open, otherwise help mom with laundry
if(tempOutside >= 70){
	console.log("GREAT!!  The weather is perfect for lemonade!!");
}else{
	console.log("BUMMER!!  You better stay inside, you should wait until it's at least 70 outside.");
}
//prompt 1 tested and working properly, showing reply in console

//prompt 2 asking user how many bags of sugar they have
var bagsSugar = prompt("How many bags of sugar do you have?");

//if bagsSugar is greater or equal to 10, you can open, otherwise help mom with laundry
if(bagsSugar >= 10){
	console.log("THAT'S SWEET!!  You have penty of sugar to make lemonade!!");
}else{
	console.log("BOGUS!!  You should have at least 10 bags of sugar to make the right mixture.");
}
//prompt 2 tested and working properly, showing reply in console

//prompt 3 asking how many lemons the user has