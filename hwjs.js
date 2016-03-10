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


