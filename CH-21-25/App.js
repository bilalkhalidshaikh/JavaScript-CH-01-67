
var br = "<br>";
var hr = "<hr>";
var es = " ";
//Task 1
var firstName = prompt("Please Enter Your First Name");
var lastName = prompt("Please Enter Your Last Name");
var fullName;
fullName = document.write("<h3>" + "Welcome "  + "<strong>" + firstName + es + lastName + "</strong>" + "</h3>"  + hr);
// Task1

//Task2
var mobmod = prompt("Enter your favorite mobile phone model", "Samsung Galaxy S6 Edge Plus");
document.write("My favorite phone is : " + mobmod + br);
document.write("Length of String " + mobmod.length + br + hr);
// Task2

//Task3
var pak = "Pakistani";
document.write("String : " + pak + br);
document.write("Index of 'n' : " + pak.indexOf('n') + br + hr);
// Task3

//Task4
var helwo = "Hello World";
document.write("String : " + helwo + br);
document.write("Last index of 'l' : " + helwo.lastIndexOf('l') + br + hr);
// Task4

//Taskt5
var strpak = "Pakistani";
document.write("String : " + strpak + br);
document.write("Character at index 3: " + strpak.charAt(3) + br + hr);
// Task5

// Task6
var res = firstName.concat(lastName);
document.write("Hy ! " + res + br + hr);
// Task6

// Task7
var hyd = "Hyderabad";
document.write("City : " + hyd + br);
document.write("After Replacement : " + hyd.replace("Hyderabad", "Islamabad") + br + hr);
// Task7

// Task8
var mess;
mess  = "Bilal and Zargham are best friends. They play cricket and football together.";
document.write(mess.replace("and", "&", "and", "&") + br + hr);
// Task8

// Task9
var str = 472;
var numstr = parseInt("477");
document.write("Value : " + str + br);
document.write("Type : String" + br);
document.write("Value : " + numstr + br);
document.write("Type : Number" +  br + hr);
// Task 9

// Task 10
var usrin;
usrin = prompt("Enter any Word" , "peanuts");
document.write("User Input : " + usrin + br);
document.write("Upper Case : " + usrin.toUpperCase() + br  + hr);
// Task10

// Task11
var usrin1;
usrin1 = prompt("Enter any Word" , "javascript");
document.write("User Input : " + usrin1 + br);
document.write("Title Case : " + usrin1.charAt(0).toUpperCase() + usrin1.substr(1) + br  + hr);
// Task11

// Task12
var num1 = 35.36 + es;
var numToStr = num1.replace("." , "");
document.write("Number : " + num1 + br)
document.write("Result : " + numToStr + br + hr)
// Task12

// Task13
var userName;
var inuserName = String.fromCharCode(33,44,46,64);
userName = prompt("Enter Your User Name");
if(userName = inuserName){
    var validUser = prompt("Please enter a valid username");
}
else if(validUser !== inuserName){
    alert("User name is valid");
}
// Task13

// Task14
var firstArr; 
var arrPrompt;
firstArr =  ["cake", "apple pie", "cookie", "chips", "patties"];
arrPrompt = prompt("Welcome to Developers Bakery.\nWhat do you want to order Sir/Ma'am");
if (arrPrompt === firstArr[0]){
    alert("Cake is Available at index 0 in our bakery");
}
else if (arrPrompt === firstArr[1]){
    alert("Apple Pie is Available at index 1 in our bakery");
}
else if (arrPrompt === firstArr[2]){
    alert("Cookie is Available at index 2 in our bakery");
}
else if (arrPrompt === firstArr[3]){
    alert("Chips is Available at index 3 in our bakery");
}
else if (arrPrompt === firstArr[4]){
    alert("Patties is Available at index 4 in our bakery");
}
else if (arrPrompt !== firstArr){
    alert("We are sorry " + arrPrompt + " is not available in our bakery");
}
// Task14

// Task15
var passPrompt; 
var letCheck;
letCheck =  /^[0-9]+[a-z]+$/;;
passPrompt = prompt("Enter Your Password");
if(passPrompt !== isNaN && passPrompt > 7 && passPrompt == parseInt(passPrompt)){
    var valisPass = prompt("Please Enter a valid password");
}
else if (valisPass !== passPrompt){
    alert("Password is valid");
}
// Task15

// Task16
var uni = "University of Karachi";
var uniArr = uni.join(" <br> ");
document.write(uniArr + br + hr);
// Task16

// Task17
var userInput2;
var userInputLast;
userInput2 = prompt("Enter any Character");
userInputLast = userInput2.charAt(userInput2.length-1);
document.write("User Input : " + userInput2 + br);
document.write("Last Character of Input : " + userInputLast + br + hr);
// Task17

// Task18
var occuText = "The quick brown fox jumps over The lazy dog";
var occuTextCheck = occuText.match(/The/g).length;
document.write("Text : " + occuText + br + "There are " + occuTextCheck + " occurrence(s) of word 'The'")
// Task18









