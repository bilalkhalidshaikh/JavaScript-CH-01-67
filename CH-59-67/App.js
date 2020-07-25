// Task #1
var mainContent = document.getElementById("main-content");
console.log(mainContent.childNodes);
// console.log(document.childNodes[1].childNodes[1].childNodes[0].childNodes[2]);
// Task #1

// Task #2
var renderElements = document.getElementsByClassName("render");
renderElements = renderElements.innerHTML;
// Task #2

// Task #3
var firstName = document.getElementById("first-name");
var lastName = document.getElementById("last-name");
var emailValue = document.getElementById("email");
firstName.value = "Muhammad Bilal";
lastName.value = "Khalid";
emailValue.value = "bilal.shaikh001@yahoo.com";
// Task #3

// Task #4
var checkNodeType = document.getElementById("form-content");
document.write(checkNodeType.nodeType + "<br>");
// Task #4

// Task #5
document.write(lastName.nodeType + "  &  " + lastName.childNodes);
// Task #5

// Task #6
document.write(
  "<br />" + mainContent.firstChild + "  &  " + mainContent.lastChild + "<br />"
);
// Task #6

// Task #7
document.write(
  lastName.nextSibling + "  &  " + lastName.previousSibling + "<br />"
);
// Task #7

// Task #8
document.write(emailValue.parentNode + "  &  " + emailValue.nodeType);
// Task #8
