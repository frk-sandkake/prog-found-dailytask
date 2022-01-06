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
// From lecture 05.01.22
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
// Declare and initialize age 10
var age = 10;
console.log(age);
if (age >= 7) {
    console.log("Greater than or equal to 7");
}
else if (age < 7) {
    console.log("Less than 7");
}
// if-else-if-if statement cat, parrot
var animal = "cat";
console.log(animal);
if (animal === "parrot") {
    console.log("The animal has two legs");
}
else if (animal === "cat") {
    console.log("The animal has four legs");
}
else if (animal !== "cat" + "parrot") {
    console.log("The animal has an unknown amount of legs");
}
// From lesson 06.01.22
for (var count = 1; count <= 10; count++) {
    console.log(count);
}
for (var i = 11; i <= 20; i++) {
    console.log(i);
}
for (var i = 21; i < 30; i++) {
    console.log(i);
}
// Array is a container ["", "", ""]
var colors = ["yellow", "green", "blue", "orange"];
console.log(colors[0]); // show first item in array
console.log(colors[1]); // show second item in array
console.log(colors[2]); // show third item in array


var firstItem = colors[0];
console.log(firstItem);

// show number of items in array
var numberOfColors = colors.length;
console.log(numberOfColors);
for (var i = 0; i <= numberOfColors; i++) { // <= gives undefined < gives you only the items
    console.log(colors[i]);
} for (var i = 0; i <= numberOfColors; i++) {
    if (colors[i] === "orange") {
        console.log("Here");
    }
}
var cars = ["Honda", "BMW", "Volvo"];
console.log(cars.length); // show number of items in array
var numberOfCars = cars.length; // show number of items in array
console.log(numberOfCars);
for (var i = 0; i <= cars.length; i++) { // <= gives undefined < gives you only the items
    console.log(cars[i]);
}
for (var i = 0; i < cars.length; i++) { // <= gives undefined < gives you only the items
    console.log(cars[i]);
}
// While loop
/*var counter = 100;
while (counter <= 10) {
    console.log("adding:", counter);
    counter++;
}*/
var counter = 100;
while (counter >= 10) {
    console.log("subtracting:", counter);
    counter--;
}
var isSubscribe = "true";
// Daily tasks 1:4
// loop 1 to 5
for (var i = 1; i <= 5; i++) {
    console.log(i);
}
for (var i = 7; i <= 16; i++) {
    console.log(i);
}
var animals = ["dog", "cat", "frog"];
console.log(animals);
for (var i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
var numberOfAnimals = animals.length;
console.log(numberOfAnimals);
console.log(typeof (numberOfAnimals));
for (var i = 0; i < numberOfAnimals; i++) {
    console.log(animals[i]);
}