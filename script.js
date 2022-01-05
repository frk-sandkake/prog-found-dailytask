// Declare todays day & show in console
var d = new Date();
console.log(d);
// Show me the result of 3*6
console.log(3 * 6);
// Alert my name:
alert("Linda");
// Declare a variable, initialize frog & show in console
var amphibian = "frog";
console.log(amphibian);
// Declare delivered, initialize with true & show in console
var delivered = true;
console.log(delivered);
// Declare score, initialize with 12 & show in console
var score = 12;
console.log(score);
// Declare fullName, join "John" "Smith".
// Show result and type of in console.
// Assign result with new 
var fullName = "John" + "Smith";
console.log(fullName);
console.log(typeof (fullName));
var nameType = typeof (fullName);
// should be rabbit
var animal = "rab" + "bit";
console.log(animal);
// string 4
var myFirstNumber = "4";
// number 4
var mySecondNumber = 4;
// sum of first and second number should be 44
var sumOfNumbers = myFirstNumber + mySecondNumber;
console.log(sumOfNumbers);
// variable number 4
var four = 4;
// variable number 5
var five = 5;
// sum of variable numbers should be 9
var sumOfVariables = four + five;
console.log(sumOfVariables);
console.log(typeof (sumOfVariables));
// light is on = false
var lightIsOn = false;
console.log(lightIsOn);
var myNumber = 7;
var myString = "dog";
console.log(myNumber > 8);
console.log(myNumber <= 8);
console.log(myString === "dog");
console.log(myNumber !== "cat");
var inputIsValid = false;
if (inputIsValid === false) {
    alert("please fill in the email field");
}

var myAge = 29;
if (myAge > 30) {
    console.log("I am too old with white hair");
}
else if (myAge === 29) {
    console.log("I still have a year of fun");
}

var color = "red";

switch (color) {
    case "red":
        console.log("the chosen color is red");
        break;
    case "green":
        console.log("the chosen color is green");
        break;
    default:
        console.log("the color is not blue, green, red...");
}