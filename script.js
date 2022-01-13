/*
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
// A While counter:
var counter = 100;
while (counter >= 10) {
    console.log("subtracting:", counter);
    counter--;
}
// This will go on forever!: var counter = 100;while (counter <= 10) {console.log("adding:", counter);counter++;}
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


// Daily tasks 2:1
// Comparison equals equally operator strict === and loose ==
var stringSix = "6";
var numberSix = 6;

if (stringSix === numberSix) { // not equal
    console.log("equal");
} else {
    console.log("not equal");
}
if (stringSix == numberSix) { // equal - but this can creat trouble in code so always use ===
    console.log("equal");
} else {
    console.log("not equal");
}
// Comparison not equal to operator strict !== and not strict !=
var stringFour = "4";
var numberFour = 4;

if (stringFour !== numberFour) { // not equal
    console.log("not equal");
} else {
    console.log("equal");
}
if (stringFour != numberFour) { // not equal
    console.log("equal");
} else {
    console.log("not equal");
}
// Check typeof on declared variable someVar
var someVar;
console.log(typeof (someVar)); //undefined

// Daily tasks 2:2
// True: arrays can hold different types of values in JS
var mixedArray = ["Linda ", 39, " has ", 2, " cats"];
console.log(mixedArray); // Array(5) ["Linda ", 39, " has ", 2, " cats"]
// Use the .lenth property to determine the number in the array
console.log(mixedArray.length); // 5
// Declare animals with an empty array
var animals = [];
console.log(animals); // Array []
// Add “cow”, “bird” and “mouse” with push method
animals.push("cow", "bird", "mouse");
console.log(animals); // Array(3) ["cow", "bird", "mouse"]
console.log(animals.length); // 3
// For loop to console log all animals in the array
for (var i = 0; i < animals.length; i++) {
    console.log(animals[i]); // cow / bird / mouse
}
// Create an array of people with properties/value name/age, and for loop name
var people = [{
    name: "Thea",
    age: 15
},
{
    name: "Patrik",
    age: 16
}];
for (var i = 0; i < people.length; i++) {
    console.log(people[i].name); // Thea / Patrik
}
// Lesson 10.01.22
var selectedNumber = 30;
if (selectedNumber >= 10 && selectedNumber <= 50) {
    console.log("the selected numbers are in range");
}
var dayOfTheWeek = "Saturday";
if (dayOfTheWeek === "Saturday" || dayOfTheWeek === "Sunday") {
    console.log("This is weekend yay!");
}
if (true && true) {
    console.log("here");
}
if (true || false) {
    console.log("here 2");
}
var someBanana;
console.log(someBanana);
console.log(typeof someBanana);

if (someBanana === undefined) {
    console.log("aw man no data!");
}
var someBanana = null;
console.log(someBanana);
console.log(typeof someBanana);

if (someBanana === null) {
    console.log("aw man still no data!");
}

var someArray = ["cat", "dog", "bird", "sloth"];
console.log(someArray);
console.log(someArray.length);

someArray.push("horse"); // adds as next item in array
console.log(someArray);
someArray.pop(); // removes last item in array
console.log(someArray);
someArray.unshift("horse"); // adds as first item in array
console.log(someArray);
someArray.shift(); // removes first item in array
console.log(someArray);
delete someArray[0]; // deletes first item in array, but leaves any empty spot
console.log(someArray);
// Lesson 11.01.22
var planets = [
    "earth",
    "mars",
    ["Hesh", "Magnus", "Lisa"],
    ["Volvo", "Polo", "BMW"]
];
console.log(planets[0]);
console.log(planets[1]);
console.log(planets[2][0]);
console.log(planets[2][1]);

var dog = {
    name: "Milo",
    breed: "labrador",
    playfulScale: 9
};
console.log(dog.name);
console.log(dog.breed);
console.log(dog.playfulScale);

var dogs = [{
    name: "Milo",
    breed: "labrador",
    playfulScale: 9
}, {
    name: "Calvin",
    breed: "German Shepard",
    playfulScale: 6
}, {
    name: "Sophia",
    breed: "boxer",
    playfulScale: 7
}];
console.log(dogs);
for (var i = 0; i < dogs.length; i++) {
    console.log(dogs[i].name);
}

var postItem = [{
    imageUrl: "/path/to/bee-picture",
    likeCounter: 80,
    likedByUser: true
}];
*/
// Lesson 12.01.22
function logWord() {
    console.log("Hello World");
}

logWord();

function logWords(theWord) {
    console.log(theWord);
}

logWords("Linda");

function logTwoWords(name, age) {
    console.log("My name is ", name, " and I'm ", age, " years old");
}

logTwoWords("Linda", 39);

function getNumberOfLikes(numberOfLikes) {
    return numberOfLikes + " Likes";
}
var totalNumberOfLikes = getNumberOfLikes(40);
console.log(totalNumberOfLikes);

// Addition with return
function getSum(firstNumber, secondNumber) {
    return (firstNumber + secondNumber);
}
var totalSum = getSum(10, 20);
console.log(totalSum);

// Multiplication with console.log
function getSum1(num1, num2) {
    console.log(num1 * num2);
}
getSum1(10, 20);

// Get name with console.log
function getName(firstName, lastName) {
    console.log(firstName + " " + lastName);
}
getName("Linda", "Sandaker");


// Get name with return
function getName1(fName, lName) {
    return (fName + " " + lName);
}
var fullName = getName1("Linda", "Sandaker");
console.log(fullName);

// Lesson 13.01.22
// Create a function with variable
var square = function (number) { // => is arrow function, it replaces function
    return number * number;
};
var x = square(10);
console.log(x);

// toString() convert number to string
var x = 123;
var y = x.toString();
console.log(x);

(123).toString();
(100 + 23).toString();

var y = 1992;
console.log("Some message", y);

var x = y.toString();
console.log("some message", x);

var someNumber = 2022;
var someText = someNumber.toString();
console.log("some message", someText); // some message (string) 2022
console.log("some message", someNumber); // some message (number) 2022
console.log("some message " + someNumber); // some message (string) 2022 because + joins strings

// Number() convert string to numbers
var someString = "Linda";
var someNumber = Number(someString);
console.log(someString);
console.log(someNumber);

var age = "30";
var x = Number(age);
console.log(x);

// sort() sorts the array
const fruits = ["Banana", "Orange", "Mango", "Apple"];
fruits.sort();
fruits.reverse();
console.log(fruits);

const points = [40, 100, 1, 5, 25, 10];
const sortedPoints = points.sort(function (a, b) { return a - b; });
console.log(sortedPoints);

// Daily tasks 2:4
function printName(name) {
    console.log(name);
}
printName("Linda");

function returnName(name) {
    return ("Hello" + " " + name);
}
var helloName = returnName("Linda");
console.log(helloName);

// Questions from Hesh: 01JS
// Number 1:
// Create an empty user object.
// Add the name property with the value Hesh.
// Add property surname with value Peter.
// Change name to Sokki.
// Remove the name property from the object.
var user = {};
Object.assign(user, { name: "Hesh" });
console.log(user);
Object.assign(user, { surname: "Peter" });
console.log(user);
Object.assign(user, { name: "Sokki" });
console.log(user);
delete user.name;
console.log(user);

var user1 = {
    name: "",
    surname: "",
};
user1.name = "Hesh";
console.log(user1);
user1.surname = "Peter";
console.log(user1);
user1.name = "Sokki";
console.log(user1);
delete user1.name;
console.log(user1);

// Number 2:
// Create an isEmpty(obj) function that returns true if the
// object has no properties and false if there is
// at least one property.
var someObject = {};

var someObject1 = {
    name: "Linda",
};

function isEmpty(obj) {
    for (var key in obj) {
        return false;
    }
    return true;
}

console.log(isEmpty(someObject1));

// Number 3:
// Given an array of numbers: [1,2,31,24,-67,5,3,555,79,-4,21,33,89,-90].
// 1) Find the maximum and minimum value of the array.
var arr = [1, 2, 31, 24, -67, 5, 3, 555, 79, -4, 21, 33, 89, -90];
console.log(arr);

function compareNumeric(a, b) {
    return a - b;
}
var tempArr = arr.sort(compareNumeric);
console.log(tempArr);
var minValue = tempArr[0];
console.log(minValue);
var maxValue = tempArr[tempArr.length - 1];
console.log(maxValue);

document.write(
    "My max value is " + maxValue + " and my min value is " + minValue
);
