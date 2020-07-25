// Task no # 5

var pass = prompt("Please enter your password");
var repass = prompt("Confirm Password");

if (repass === pass) {
    alert("Correct! The password you entered matches the original password")
}
else if (repass !== pass) {
    alert("Incorrect password")
}


// Task no # 6

var greeting;
var hour = 13;
if (hour < 18)
 {
    alert(greeting = "Good day");
}
else if (hour > 18) {
    alert(greeting = "Good evening");
} 


// task no # 7

var time = prompt("Please Enter The Current Time in  Format like: 1900");

if (time >= 0000 && time < 1200){
    alert("Good Morning")
}
else if (time >= 1200 && time < 1700){
    alert("Good Afternoon")
}
else if (time >= 1700 && time < 2100){
    alert("Good Evening")
}
else if (time >= 2100 && time < 2359){
    alert("Good Night")
}

