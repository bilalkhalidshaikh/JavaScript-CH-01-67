var br = "<br>";
var hr = "<hr>";
var es = " ";

// Task1
var userInput1;
userInput1 = prompt("Enter  Positive Integer");
document.write("Number : " + userInput1 + br);
document.write("Round off value : " + Math.round(userInput1) + br);
document.write("Floor value : " + Math.floor(userInput1) + br);
document.write("Ceil value : " + Math.ceil(userInput1) + br + hr);
// Task1

// Task2
var userInput2;
userInput2 = prompt("Enter Negative Integer");
document.write("Number : " + userInput2 + br);
document.write("Round off value : " + Math.round(userInput2) + br);
document.write("Floor value : " + Math.floor(userInput2) + br);
document.write("Ceil value : " + Math.ceil(userInput2) + br + hr);
// Task2

// Task3
var absoVal1 = -4;
var absoVal2 = 5;
document.write("The Absolute Value of " + absoVal1 + " is " + Math.abs(absoVal1) + br)
document.write("The Absolute Value of " + absoVal2 + " is " + Math.abs(absoVal2) + br + hr)
// Task3

// Task4
var diceRoll1 = Math.floor( Math.random() * 6 ) +1;
var diceRoll2 = Math.floor( Math.random() * 3 ) +1;
document.write('Random Dice value : ' + diceRoll1 + br );
document.write('Random Dice value : ' + diceRoll2 + br + hr);
// Task4

// Task5
var prob1 = Math.floor(Math.random() * 2) + 1;
var prob2 = Math.floor(Math.random() * 3) + 2;
if( prob1 === prob2){
   document.write('1\nRandom Coin Value ' + "Heads");
 }
 else if (prob1 !== prob2)
 {
   document.write('2\nRandom Coin Value ' + "Tails" + br + hr);
 }
// Task5

// Task6
var randomNum1;
var randomNum2;
var mathRandom = Math.floor(Math.random() * 100) + 1;
randomNum1 = 1;
randomNum2 = 100;
document.write("Random number between " + randomNum1 + " and " + randomNum2 + " : " + mathRandom + br + hr);
// Task6

// Task7
var userWeight;
userWeight = prompt("Enter you weight in kilograms")
document.write("The weight of user is " + userWeight + br + hr)
// Task7

// Task8
var userInput3; 
var randomNumber1;
var randomNumber2;
randomNumber1 = Math.floor(Math.random() * 10 + 1); 
randomNumber2 = Math.floor(Math.random() * 1 + 10); 
userInput3 = prompt('Enter a number between 1 and 10.');
if(userInput3 == randomNumber1 || userInput3 == randomNumber2){
  alert("CONGRATULATIONS!!! YOUR INPUT NUMBER IS MATCHED");
}
else if(userInput3 > randomNumber1 || userInput3 > randomNumber2){
  prompt("OOPS SORRY!! TRY A SMALLER NUMBER")
}
else if(userInput3 < randomNumber1 || userInput3 < randomNumber2){
  prompt("OOPS SORRY!! TRY A GREATER NUMBER")
}
else{
  alert("TRY AGAIN!!")
}
// Task8