//Beginning with var inputs

var frontWidth = prompt("We are going to provide you with an estimate for mowing your lawn.  \n\nPlease tell us the width of the longest portion of your front lawn, in feet.");

//Tested and prompt works.

var frontLength = prompt("Next, what is the length of the longest portion of your front lawn, also in feet?");

//Tested and prompt works.

var frontYard = frontWidth * frontLength; //calculation works with console.log(frontYard)

//console.log(frontYard);

var backWidth = prompt("Now, please tell us the width of the longest portion of your back yard, again in feet.");

//Tested and prompt works.

var backLength = prompt("Thank you! \n\nFinally, please tell us the length of the longest portion of your back yard, in feet.");

//Tested and prompt works.

var backYard = backWidth * backLength; //calculation works with console.log(frontYard)

//console.log(frontYard);

//Computation for totalYard area and alert to customer of total area.  Console.log for the console notification.

var totalYard = frontYard + backYard;

//console.log(totalYard);

var totalCost = totalYard * .02;

//console.log(totalCost);

console.log(totalCost);

var totalYard = alert("The total area of your front yard is " + frontYard + " sq. feet and the total area of your back yard is " + backYard + " sq. feet. \n\nFor a grand total of " + totalYard + " sq. feet.\n\nThe total cost for mowing your lawn will be $" + totalCost);