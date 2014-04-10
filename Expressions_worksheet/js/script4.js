//Grocery Array

var grocerySpend = [102.95, 126.17, 112.59, 95.18, 89.93];

var total = (grocerySpend [0] + grocerySpend [1] + grocerySpend [2] + grocerySpend [3] +
grocerySpend [4]);

var totalavg = total/5;

var string1 = "You have spent a total of $";
var string2 = " on groceries over 5 weeks.  That is an average of $";
var string3 = " per week."

console.log(string1 + total + string2 + totalavg + string3);