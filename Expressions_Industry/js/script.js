//Determining the Production Cost for a Client
//Begin by identifying how much customers are looking to spend.
var voiceArray = prompt("So you wanna make a commercial for your business? \n\nWell you've come to the right place! \n\nHow much would you like to spend for Voiceover production in your commercial? \n\nVoiceover is $100 per minute. \n\nPlease enter the total amount you wish to spend. \n\nIf you don't want Voiceover in your commercail, please enter 0.");

//Prompt tested, working

//Then see the number of photographs and videos they wish to include in the commercail.
var photoArray = prompt("How many photos/videos do you with to include in your commercial? \n\nEach photo/video is $5.00 each.");

//Prompt tested, working

//Next, does the customer need a logo, if so, how many.
var logoArray = prompt("Would you like us to create a logo for you? \n\nIf so, please enter the number of logos you would like created in the space below. \n\nEach logo is $150 each. \n\nTo pass on the logo creation, please enter 0.");

//Prompt tested, working

//Fianlly, do you wish to include background music in your commercial?
var musicArray = prompt("Finally, would you like to include background music in your production? \n\nBackground music costs $50 per tracks selected. \n\nIf you don't wish to include background music, please enter 0.");

//Prompt tested, working

//Arrays are based on customer input at the site.
var myArray = new Array();
myArray[0] = voiceArray;
myArray[1] = photoArray * 5;

//console.log(myArray[0]);
//console.log(myArray[1]);