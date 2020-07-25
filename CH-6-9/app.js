// Task-1
var a = 10;
document.write(
  "Result: <br>" +
    "<br> The value of a is: " +
    a +
    "<br>..................................." +
    "<br> The value of ++a is: " +
    ++a +
    "<br> Now the value of a is: " +
    a +
    "<br><br> The value of a++ is: " +
    a++ +
    "<br> Now the value of a is: " +
    a +
    "<br><br> The value of --a is: " +
    --a +
    "<br> Now the value of a is: " +
    a +
    "<br><br> The value of a-- is : " +
    a-- +
    "<br> Now the value of a is: " +
    a
);
// Task-1

// Task-2
var b = 2,
  c = 1;
document.write(
  "<br><br> b is " +
    b +
    "<br> c is " +
    c +
    "<br> --b is " +
    --b +
    "<br> --b - --c is " +
    (--b - --c) +
    "<br> --b - --c + ++c is " +
    (--b - --c + ++c) +
    "<br> The Result (--b - --c + ++c +c--) is " +
    (--b - --c + ++c + c--)
);
// Task-2

// Task-3
var name = prompt("Enter your name: ");
alert("Nice to see you Mr. " + name);

// Task-4,5
var number = prompt("Enter a number");
for (var i = 1; i <= 10; i++) {
  document.write("<br><br>" + number + " x " + i + " = " + number * i + "<br>");
}
// Task-4,5

// Task-6
var subjectOne = prompt("Selcect your Subject 1");
var subjectTwo = prompt("Selcect your Subject 2");
var subjectThree = prompt("Selcect your Subject 3");
var totalMarks = 100;
var subjectOneMarks = prompt("Enter Marks Subject 1");
var subjectTwoMarks = prompt("Enter Marks Subject 2");
var subjectThreeMarks = prompt("Enter Marks Subject 3");
var totalMarksSubject = totalMarks * 3;
var totalObtainedMarks = subjectOneMarks + subjectTwoMarks + subjectThreeMarks;
var percentSubjectOne = (subjectOneMarks / totalMarks) * 100;
var percentSubjectTwo = (subjectTwoMarks / totalMarks) * 100;
var percentSubjectThree = (subjectThreeMarks / totalMarks) * 100;
document.write(
  "<table style='width: 552px; height: 214px; empty-cells: hide;'>" +
    "<tbody>" +
    "<tr>" +
    "<th style='width: 60px;>" +
    "Subject" +
    "</th>" +
    "<th style='width: 83px;>" +
    "&nbsp;" +
    "</th>" +
    "<th style='width: 119px;>" +
    "Total Marks" +
    "</th>" +
    "<th style='width: 127px;>" +
    "Obtained marks" +
    "</th>" +
    "<th style='width: 129px;>" +
    "Percentage" +
    "</th>" +
    "</tr>" +
    "<tr>" +
    "<td style='width: 60px;'>" +
    subjectOne +
    "</td>" +
    "<td style='width: 83px;'>" +
    "&nbsp;" +
    "</td>" +
    "<td style='width: 119px;'>" +
    totalMarks +
    "</td>" +
    "<td style='width: 127px;'>" +
    subjectOneMarks +
    "</td>" +
    "<td style='width: 129px;'>" +
    percentSubjectOne +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td style='width: 60px;'>" +
    subjectTwo +
    "</td>" +
    "<td style='width: 83px;'>" +
    "&nbsp;" +
    "</td>" +
    "<td style='width: 119px;'>" +
    totalMarks +
    "</td>" +
    "<td style='width: 127px;'>" +
    subjectTwoMarks +
    "</td>" +
    "<td style='width: 129px;'>" +
    percentSubjectTwo +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td style='width: 60px;'>" +
    subjectThree +
    "</td>" +
    "<td style='width: 83px;'>" +
    "&nbsp;" +
    "</td>" +
    "<td style='width: 119px;'>" +
    totalMarks +
    "</td>" +
    "<td style='width: 127px;'>" +
    subjectThreeMarks +
    "</td>" +
    "<td style='width: 129px;'>" +
    percentSubjectThree +
    "</td>" +
    "</tr>" +
    "</tbody>" +
    "</table>"
);
