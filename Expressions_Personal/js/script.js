//Beginning with var inputs

var frontWidth = prompt("We are going to provide you an estimate for mowing your lawn.  \n\nPlease tell us the width of the longest portion of your front lawn, in inches.");

//Tested and prompt works.

var frontLength = prompt("Next, what is the length of the longest portion of your front lawn, also in inches?");

//Tested and prompt works.

var frontYard = frontWidth * frontLength; //calculation works with console.log(frontYard)

console.log(frontYard);

var backWidth = prompt("Now, please tell us the width of the longest portion of your back yard.");

//Tested and prompt works.

var backLength = prompt("Thank you! \n\nFinally, please tell us the lenght of the longest portion of your back yard.");

//Tested and prompt works.

var backYard = backWidth * backLength; //calculation works with console.log(frontYard)

console.log(frontYard);