// 1
var booleanValue    = true;
var numberValue     = 1;
var stringValue     = "couch";
var nullValue       = null;
var undefinedValue  = undefined*undefined;
var undefinedValue2 = undefined;

// 2
console.log(typeof(booleanValue   ));
console.log(typeof(numberValue    ));
console.log(typeof(stringValue    ));
console.log(typeof(nullValue      ));
console.log(typeof(undefinedValue ));
console.log(typeof(undefinedValue2));

// 3
  // The null doesnt show the expected way

// var Mia ={name:"Mia",getname:function(){return this.name}};
// var Albert ={name:"Albert",getname:function(){return this.name}};
// var Tony ={name:"Tony",getname:function(){return this.name}};//

// var attendess={//

//     array :[Mia,Albert,Tony],
//     getArray: function(){return this.array}//

// };
//  console.log(attendess.array[2].getname());
// attendess.array.sort(getArray());

var attendess =["Mia","Albert","Tony"];

var attendess = [];
attendess[0]= "Mia";
attendess[1]= "Albert";
attendess[2]= "Tony";

console.log(attendess[2]);
console.log(attendess.sort());
attendess.sort().splice(2,1);
console.log(attendess);
attendess.unshift("Blaine");
console.log(attendess);
console.log( "Computers are fun, \n Because they are neat. \nJavascript and Ruby, \nThey cannot be beat!");


// While Loops

var isDone = prompt("Are you done?")
while (isDone === "no" | isDone ==="No") {
    isDone = prompt("Are you done?");
}

var theTarget = Math.round(100 * Math.random()) + 1;


/* Number guessing game. While the guess is not
 the target value, continue asking the user
 for a guess and informing whether the guess
 is too low or too high. */
function guess(){
  var guess = prompt("Make a guess!");
  var theTarget = Math.round(100 * Math.random()) + 1;
  while (guess !== theTarget) {
      guess = prompt("Make a guess!");

      if (guess !== theTarget && guess > theTarget) {
          alert("Too high!");
      } else if (guess !== theTarget && guess < theTarget) {
          alert("Too low!");
      }else{
        alert("You got it");
      }
}}

/* The following while loop implements a
 "count up" clock. Make it console.log the
 numbers 1, 2, 3, 4, and 5. */
function clock(){
var i = 1;
while (i < 6) {
    console.log(i);
    i++;
}}



/************************
 *  FOR LOOPS
 ************************/

/* Rewrite the "count up" clock as a for loop! */

for (var i=1; i<6; i++) {
    console.log(1);
}




/* Rewrite the for loop to have no initial conditions. */

null;
for (; null; null) {
    console.log(null);
}

/* Rewrite the for loop to have no incrementing statement. */

for (null; null; ) {
    console.log(null);
    null;
}

/* Rewrite the for loop to have no incrementing or intial
 statements. */

null;
for (; null; ) {
    console.log(null);
    null;
}

/* Note that this is identical to the while loop! */


/* Let's make a count DOWN clock. We will display
 5, 4, 3, 2, 1, 0. */

var i = null;
while (i >= null) {
    console.log(null);
    null;
}

/* Now, rewrite the countdown clock as a for loop! */

for (null; null; null) {
    console.log(null);
}


/* Using a for loop, print each value of the array
 to the console. */

var foods = ["Burger", "Fries", "Drink", "Tomato"];

for (i=0; i<null; null) {
    console.log(null);
}

/* Using a for loop, print each value of the array
 to the console, backwards! */

var foods = ["Burger", "Fries", "Drink", "Tomato"];

for (i=foods.length-1; null; null) {
    console.log(null);
}



/************************
 *  FUNCTIONS
 ************************/

/* Given the following function, call the function with
 appropriate example values. In a comment, write
 what the expected output will be. */

function concatStrings(str, appendString) {
    return str + appendString;
}  // returns the concatonate string vlaue

concatStrings("big","hair");  // output is: "big hair"


/* Write a function that takes one number as a parameter,
 and returns that number plus one. Choose good
 variable names! Call the function with an appropriate
 parameter. */

function increment(number) {
    return number +1;
}

increment(4);  // output is: 5


/* Complete the below function. It accepts a
 number and returns a string with "a" repeated
 that many times. For example, calling the
 function with 3 will return "aaa".
 Use a for loop to construct the return
 string. Call the function
 with example values and write the output as
 a comment. */

function repeatA(numTimesRepeated) {
    var returnString = "";

    for (null; null; null) {
        returnString += "a";
    }

    return returnString;
}

repeatA(null);   // output is:


/* Let's generalize the last function. Now, a
 second parameter will be passed which is the
 character (or string) to repeat! Call the function
 with example values and write the output as
 a comment. */

function repeatString(numTimesRepeated, stringToRepeat) {
    // modify the last function's code
}

repeatString(null, null);  // output is:


/* Write a function which returns the original array,
 but reversed! */

function reverseStrings(arrayOfStrings)
{
    var reversedArray = [];

    for (i=arrayOfStrings.length-1; null; null) {
        reversedArray.push(null);
    }

    return reversedArray;
}

var foods = ["Burger", "Fries", "Drink", "Tomato"];
reverseStrings(foods);

/* Note that variables can be assigned functions. */

var someVariable = repeatA;
var anotherVariable = repeatA;

/* Try running the above two lines in your browser.
 Now, try calling the functions by using the
 new variables. (i.e. run the below code!) */

someVariable(3);
anotherVariable(5);

/* This is an important fact about JavaScript --
 functions can be assigned to variables and
 passed around as arguments to functions! */


/* CONGRATULATIONS! YOU MADE IT TO THE END! */

