// Task-1
var numOne = 3;
var numTwo = 5;
var newNum = numOne + numTwo;
document.write("Sum of " + numOne + " and " + numTwo + " is " + newNum);
// Task#1

// Task-2
var numO = 5;
var numT = 3;
var newN = numO - numT;
document.write("<br> Subtraction of " + numO + " and " + numT + " is " + newN);
var numThree = 5;
var numFour = 3;
var newMulti = numThree * numFour;
document.write(
  "<br> Muliplication of " + numThree + " and " + numFour + " is " + newMulti
);
var numFive = 6;
var numSix = 3;
var newDivide = numFive / numSix;
document.write(
  "<br> Division of " + numFive + " by " + numSix + " is " + newDivide
);
var numSeven = 7;
var numEight = 3;
var newModulus = numSeven % numEight;
document.write(
  "<br> Modulus of " + numSeven + " and " + numEight + " is " + newModulus
);
// Task#2

// Task#3
var taskThree;
taskThree = 0;
document.write("<br><br> Value after variable declaration is " + taskThree);
taskThree = 5;
document.write("<br> Initial value: " + taskThree);
var taskThreetwo;
taskThreetwo = taskThree + 1;
document.write("<br> Value after increment is : " + taskThreetwo);
var taskThree3;
taskThree3 = taskThreetwo + 7;
document.write("<br> Value after addition is : " + taskThree3);
var taskThree4;
taskThree4 = taskThree3 - 1;
document.write("<br> Value after decrement is : " + taskThree4);
var taskThree5;
taskThree5 = taskThree4 % 3;
document.write("<br> The Remainder is : " + taskThree5);
// Task#3

// Task-4
var taskFour2;
taskFour2 = 5;
var taskFour3;
taskFour3 = 600 * taskFour2;
document.write(
  "<br><br> Total cost to buy " +
    taskFour2 +
    " tickets to a movie is " +
    taskFour3 +
    "PKR"
);
// Task#4

// Task-5
for (var i = 1; i <= 10; i++) {
  document.write("<br><br>" + "4" + "x" + i + "=" + 4 * i);
}
// Task#5

// Task-6
var celcius;
celcius = 37;
var fahrenheit = (celcius * 9) / 5 + 32;
document.write("<br><br> 37C is " + fahrenheit + "F");
var fahrenheit2;
fahrenheit2 = 98;
var calcius2 = ((fahrenheit2 - 32) * 5) / 9;
document.write("<br> 98F  is " + calcius2 + "C");
// Task#6

// Task-7
var priceItemOne;
priceItemOne = 650;
var priceItemTwo;
priceItemTwo = 120;
var quantityItemOne;
quantityItemOne = 3;
var quantityItemtwo;
quantityItemtwo = 7;
var shippingCharges;
shippingCharges = 100;
var subTotal;
subTotal =
  priceItemOne * quantityItemOne +
  priceItemTwo * quantityItemtwo +
  shippingCharges;
document.write(
  "<br> <br>Price of item 1 is " +
    priceItemOne +
    "<br> Quantity Item 1 is " +
    quantityItemOne +
    "<br> Price of Item 2 is " +
    priceItemTwo +
    "<br> Quantity of Item 2 is " +
    quantityItemtwo +
    "<br> Shipping Charges " +
    shippingCharges +
    "<br>" +
    "<br>Total cost of your order is " +
    subTotal
);
// Task#7

// Task-8
var totalMarks;
totalMarks = 1100;
var obtainedMarks;
obtainedMarks = 634;
var percentage;
percentage = (obtainedMarks / totalMarks) * 100;
document.write(
  "<br> Marks Sheet</h1>" +
    "<br><br><br> Total marks: " +
    totalMarks +
    "<br> Marks obtained:" +
    obtainedMarks +
    "<br> Percentage :" +
    percentage +
    "%"
);
// Task#8

// Task-9
var usDollarRate = 104.8;
var saudiRiyalRate = 28;
var Dollar = 10;
var Riayal = 25;
var pakRupee = usDollarRate * Dollar + saudiRiyalRate * Riayal;
document.write(
  "<br> <h1> Currency in PKR </h1>" + "<br> Total Currency in PKR: " + pakRupee
);
// Task#9

// Task-10
var taskTenNum;
taskTenNum = 6;
var taskTenTotal = taskTenNum + (5 * 10) / 2;
document.write("<br>" + taskTenTotal);
// Task#10

// Task-11
var currentYear = 2020;
var dateOfBirth = 1998;
var nowAge = currentYear - dateOfBirth;
document.write(
  "<br> <h1>Age Calculator</h1>" +
    "<br> Current Year: " +
    currentYear +
    "<br> Birth Year: " +
    dateOfBirth +
    "<br> Your Age is: " +
    nowAge
);
// Task#11

// Task-12
var radius = 20;
var circumference = 2 * 3.142 * radius;
var areaCircle = 3.142 * (radius * radius);
document.write(
  "<br> <h1> The Geometrizer</h1>" +
    "<br> Radius of Circle is: " +
    radius +
    "<br> The circumference is: " +
    circumference +
    "<br> The area is: " +
    areaCircle
);
// Task-12

// Task-13
var favoriteSnack = "Samosa";
var myAgeNow = 22;
var maxAgeGodKnows = 60;
var amountPerDay = 3;
var howMuchiEat = (maxAgeGodKnows - myAgeNow) * 3;
document.write(
  "<br> <h1>The Lifetime Supply Calculator</h1>" +
    "<br> Favorite Snack: " +
    favoriteSnack +
    "<br> Current age: " +
    myAgeNow +
    "<br> Estimated Max Age: " +
    maxAgeGodKnows +
    "<br> Amount of snack per day: " +
    amountPerDay +
    "<br> You will need " +
    howMuchiEat +
    " Samosa to last you untill the ripe old age of: " +
    maxAgeGodKnows
);
// Task-13
