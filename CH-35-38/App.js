var br = "<br />";  
var hr = "<hr />";  
var esp = " ";  


// TAsk1
function date(){
    var date = new Date();
    document.write(br+hr+date + br + hr);
}
date();
// TAsk1


// TAsk2
function fandl(){
    var firstName = prompt("Enter Your First Name");
    var lastName = prompt("Enter Your Last Name");
    document.write(" <h3>Welcome " + firstName + esp + lastName + "</h3>" + br + hr)
}
fandl()
// TAsk2


// TAsk3
function numUser(){
    var a = prompt("Enter first number","");
    var b = prompt("Enter second number","");
    a=Number(a);
    b=Number(b);
    document.write("Sum of two numbers is : " +  +(a+b) + br + hr);
}
numUser()
// TAsk3


// TAsk4
        // Caculator
function calc(num1, opr, num2){
    if (opr === "+"){
        return num1+num2;
    }
    else if (opr === "-"){
        return num1-num2;
    }
    else if (opr === "*"){
        return num1*num2;
    }
}
calc()
document.write(calc(30, "+", 20) + br );
document.write(calc(20, "-", 9) + br);
document.write(calc(6, "*", 13) + br);
// TAsk4

// TAsk5
function square(x){
    return x*x;
}
document.write(square(12) + br + hr)
// TAsk5

// TAsk6
function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }
  document.write(factorialize(5));
// TAsk6


// TAsk7
var submit = document.getElementById('submit');
var input1 = document.getElementById('txtFirstNumber');
var input2 = document.getElementById('txtSecondNumber');
var result = document.getElementById('result');

function sum(){
       var inputValue1 =  input1.value;
       var inputValue2 =  input2.value;
       var inputValueSum =  (+inputValue1) + (+inputValue2);

       result.innerHTML += "Sum of " + inputValue1 + " & " + inputValue2 + " is : " + inputValueSum + br;
        
}
// TAsk7

// TAsk8
var numOF1 = document.getElementById('num1');
var numOF2 = document.getElementById('num2');
var resultOf = document.getElementById('btn');
var btnResult = document.getElementById('btnResult');
function  calculateHypotenuse(){
    var num1Value = numOF1.value;
    var num2Value = numOF2.value;
    var sqrtOfNum1 = Math.sqrt(num1Value);
    var sqrtOfNum2 = Math.sqrt(num2Value);


    function calculateSquare(){
        hypoTenus = (+sqrtOfNum1) + (+sqrtOfNum2);

}
calculateSquare()
        btnResult.innerHTML += "Hypotenus of right angle triangle is : " + Math.floor(hypoTenus) + br + hr;
        }
// TAsk8


// TAsk9
var length = document.getElementById('length');
var width = document.getElementById('width');
var ans = document.getElementById('triangle');
var resOfTriangle = document.getElementById('triangleResult');
function area(){
    var areaOfTriangle = length.value * width.value;
    resOfTriangle.innerHTML += "Area of Triangle is : " + areaOfTriangle + br + hr; 
}
// TAsk9


// TAsk10
var palindrome = document.getElementById('palindrome');
var clickPalindrome = document.getElementById('resultOfPal');
var PalindromeOf = document.getElementById('palindromeResult');
var valueOfPalindrome = palindrome.value;
var palindromeWords = []
function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }

  PalindromeOf.innerHTML +=   "Palindrome Found";


// TAsk11
function capitalize_Words(str)
{
 return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
document.write(capitalize_Words(br+ hr +'the quick brown fox') +br +hr);
// TAsk11


// TAsk12
function findLongestWord() {
    var str = document.getElementById('inputText').value;
    calculateLength(str);
  }
  
  function calculateLength(str) {
    var substring = str.split(" ");
    var minChar = '';
    for (var i = 0; i <= substring.length - 1; i++) {
      if (substring[i].length >= minChar.length) {
        minChar = substring[i];
      }
    }
    document.getElementById('longChar').innerHTML = 'Longest Word: ' + minChar;
    document.getElementById('longCharLength').innerHTML = 'Longest Word length: ' + minChar.length + br + hr;
  }
// TAsk12



// TAsk13
function char_count(word, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < word.length; position++) 
 {
    if (word.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

document.write(char_count('saylaaniwelfare.com', 'a'));
// TAsk13



// TAsk14

function circle(radius)
{
    this.radius = radius;
  // area method
    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
    };
  // perimeter method
    this.perimeter = function ()
    {
        return 2*Math.PI*this.radius;
    };
}
var c = new circle(3);
document.write('Area of Circle =', c.area().toFixed(2) + br);
document.write('Circumference of circle  =', c.perimeter().toFixed(2) + br + hr);
// TAsk14