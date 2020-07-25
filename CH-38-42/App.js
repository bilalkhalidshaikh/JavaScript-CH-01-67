// Task#1
var power;
function pow(a, b) {
  return Math.pow(a, b);
}
console.log("5 Exponent 2 = " + pow(5, 2));
// Task#1

// Task#2
function check() {
  var year = document.getElementById("year").value;
  var yearMessage = (document.getElementById("yearMessage").innerHTML =
    year % 100 === 0 ? year % 400 === 0 : year % 4 === 0);
}
// Task#2

// Task#3
function areaOfTriangle() {
  var side1 = document.getElementById("side1");
  var side2 = document.getElementById("side2");
  var side3 = document.getElementById("side3");
  var area = document.getElementById("areaOfTriangle");
  var s = (side1 + side2 + side3) / 2;
  area.innerHTML = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
}
// Task#3

// Task#4
var computerMarks = document.getElementById("computer").value;
var mathMarks = document.getElementById("math").value;
var physicsMarks = document.getElementById("physics").value;
var totalMarks = document.getElementById("total").value;
var obtainMarks = computerMarks + mathMarks + physicsMarks;
var averageHtml = document.getElementById("ave");
var percentageHtml = document.getElementById("per");
function average() {
  averageHtml.innerHTML =
    "The Average of Marks is : " +
    (obtainMarks / obtainMarks.length) * obtainMarks.length +
    "<br />";
}
function percentage() {
  percentageHtml.innerHTML =
    "The Percentage of Marks is : " + obtainMarks + "%";
}
// Task#4

// Task#5
function indexOf() {
  var str = "Hello world, Welcome to the Developers World.";
  var n = str.indexOf("Welcome");
  console.log(n);
}
indexOf();
// Task#5

// Task#6
function removeVowels(str) {
  var text = document.getElementById("replace").value;
  return text.replace(/[aeiou]/g, "");
}
var removevowels = document.getElementById("removevowel");
function buttonClick() {
  removevowels.innerHTML =
    "After Delete Vowels : " + "(" + removeVowels(removevowels.innerHTML) + ")";
}
// Task#6

// Task#7
function findOccurrences() {
  var str = "Pleases read this application and give me gratuity";
  var chars = str.toLowerCase().split("");
  var count = 0;

  for (let i = 0; i < chars.length - 1; i++) {
    var char = chars[i];
    var next = chars[i + 1];
    if (isCorrectCharacter(char) && isCorrectCharacter(next)) {
      count++;
    }
  }

  return count;
}
function isCorrectCharacter(char) {
  switch (char) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      return true;
    default:
      return false;
  }
}
var found = findOccurrences();

console.log(found);
// Task#7

// Task#8
var citiesDistance = document.getElementById("cities");
var meterHtml = document.getElementById("metersHtml");
var feetHtml = document.getElementById("feetHtml");
var inchesHtml = document.getElementById("inchesHtml");
var centiMeterHtml = document.getElementById("centiHtml");
function checkMeters() {
  var meters = citiesDistance.value * 1000;
  meterHtml.innerHTML = meters;
}
function checkFeet() {
  var feet = citiesDistance.value * 3280.8;
  feetHtml.innerHTML = feet;
}
function checkInches() {
  var inches = citiesDistance.value * 39370;
  inchesHtml.innerHTML = inches;
}
function checkCentiMeters() {
  var centmeter = citiesDistance.value * 100000;
  centiMeterHtml.innerHTML = centmeter;
}
// Task#8

// Task#9
//Global Variables
var employeeName = document.getElementById("name");
var employeeHours = document.getElementById("hours");

function paySalary() {
  if (employeeHours.value <= 40) {
    var regtime = 11.0 * employeeHours.value;
    var overtime = 0.0;
    var salary = regtime;
  } else if (employeeHours.value > 40) {
    var regtime = 11.0 * 40;
    var overtime = 11.0 * 1.5 * (employeeHours.value - 40);
    var salary = regtime + overtime;
  }
  document.getElementById("results").innerHTML =
    "Employee Name: " + employeeName.value + " | Employee Gross Pay: " + salary;
}
// Task#9


// Task #10
var amountHtml = document.getElementById("withDraw");
var amount = document.getElementById("amount").value;
function currencyDenomination() {
  var a = amount / 100;
  amountHtml.innerHTML = "Required notes of Rs.100 = " + Math.floor(a);
  var hundred = (amount % 100) / 50;
  amountHtml.innerHTML = "Required notes of Rs.100 = " + Math.floor(hundred);
  var fifty = ((amount % 100) % 50) / 10;
  amountHtml.innerHTML = "Required notes of Rs.50 = " + Math.floor(fifty);
  var ten = ((amount % 100) % 50) / 10;
  amountHtml.innerHTML = "Required notes of Rs.10 = " + Math.floor(ten);
}
// Task #10
