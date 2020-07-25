var br = "<br>";
var hr = "<hr>";
var es = " ";


// TAsk1
var date = new Date()
document.write(date+ br + hr)
// TAsk1

// TAsk2]
var monthName = ["January", "Februry", "March", "April", "May", "June", "June", "July", "August", "September", "Octobor", "November", "December"];
var currMonth = new Date();
document.write("Current Month : " + monthName[currMonth.getMonth()] + br + hr)
// TAsk2

// TAsk3
var event = new Date();
var options = { weekday: 'long' };
var currDay = event.toLocaleDateString('en-US', options);
var dayStr = currDay.substring(0,3)
document.write("Today is " + dayStr + br + hr);
// TAsk3

// TAsk4
var weekDay;
var weekDate;
weekDate = new Date();
weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
if(weekDate.getDay() == 0){
    document.write("Its fun Day"  + br + hr)
}
else if(weekDate.getDay() == 6){
    document.write("Its fun Day"  + br + hr)
}
// TAsk4

// TAsk5
var nowDate = new Date();
var firstDays = nowDate.setDate(0);
var lastDays = nowDate.setDate(15);
if(nowDate = firstDays){
    document.write("First Fifteen Days of the Month"  + br + hr);
}
else if(nowDate = lastDays){
    document.write("Last Fifteen Days of the Month" + br + hr);
}
// TAsk5

// TAsk6
var todayD = new Date();
var todaySet = new Date('January 1, 1970');
var todaySet2 = new Date('January 1, 1970');
document.write(todayD + br + todaySet + br + todaySet2 + br + hr);
// TAsk6

// TAsk7
var dt = new Date();
var h = dt.getHours();
var m = dt.getMinutes();
if (h > 11){
    document.write("Its PM" + br + hr)
}
else if (h < 11){
    document.write("Its PM" + br + hr)
}
// TAsk7

// TAsk8
var laterDate = new Date('December 31, 2020, 22:50:16');
    document.write(laterDate + br + hr)
// TAsk8
 
// TAsk9
var ramzanDate = new Date("June 18, 2005").getTime();
var toDate = new Date().getTime();
var ramzanRemain = toDate + ramzanDate;
// var finalDate = ramzanRemain.slice(0,3);
alert(ramzanRemain.toString().slice(0,3) + " days have passed since 1st Ramadan, 2015")
// TAsk9

// TAsk10
var oldDate = new Date("December 5, 2015");
var oldDateTime = new Date("December 5, 2015").getTime().toString();
document.write("On refrence Date " + oldDate + "," + br + oldDateTime.slice(0,6) + " seconds has passed since beggning of 2015" + br + hr);
// TAsk10

// TAsk11
var onDate = new Date("December 5 2005, 23:08:16");
var onagoDate = new Date("December 5 2005, 22:08:16");
var agoHour = onagoDate
document.write("Current Date : " + onDate + br + "1 hour ago, it was " + agoHour + br + hr);
// TAsk11;

// TAsk12
var onDate = new Date("December 5 2005, 23:09:37");
var onagoDate = new Date("December 5 1915, 22:08:16");
var agoHour = onagoDate
document.write("Current Date : " + onDate + br + "100 years back, it was " + agoHour + br + hr);
// TAsk12

// TAsk13
var userAge = new Date (prompt("Enter your Date of Birth", "April 29, 2003"));
var userAgeTime = userAge.getTime();
var currDate = new Date(); 
var currHours = currDate.getTime();
var diff = userAgeTime - currHours;
var ageDiff = diff/(1000*60*60*24*30*12);
var ageFloor = Math.floor(ageDiff);
document.write("Your are age is " + (++ageFloor) + br + "Your birth year is " + userAge.toString().substring(10,15) + br + hr);
// TAsk13

// TAsk14
        // K-Electric Bill
        var customerName;
        var currentMonth;
        var numOfUnit;
        var charPerUnit;
        var netAmount;
        var letPayment;
        var grossAmount;
        customerName = "ABC Customer";
        currentMonth =  monthName[currMonth.getMonth()];
        numOfUnit = 410;
        charPerUnit = 16;
        netAmount = numOfUnit * charPerUnit;
        letPayment = 350;
        grossAmount = netAmount + letPayment;
        document.write(
            "<h1> K-Electric Bill </h1>"+br+"Customer Name : "+customerName+br+"Month : "+currentMonth+
            br+"Number of units : "+numOfUnit+br+"Charge per unit : "+charPerUnit+br+
            br+"Net Amount Payable (within Due Date) : "+netAmount+br+"Late payment surcharge : "+letPayment+
            br+"Gross Amount Payable (after Due Date) : "+grossAmount+br+hr
            );
// TAsk14