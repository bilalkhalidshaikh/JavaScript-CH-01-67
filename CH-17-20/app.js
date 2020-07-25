// Chapter 17-20

// Task-1

var citiesSindh = ["Karachi", "Hyderabad", "Larkanaa", "Sukkur"];
var citiesPunjab = ["Lahore", "Faisalabad", "Multan", "Rawalpindi"];
var citiesBalochistan = ["Quetta", "khuzdaar"];

var citiesArray = [citiesSindh + citiesPunjab + citiesBalochistan];



// Task-2

var taskTwo1 = ["0", "1", "2", "3"];
var taskTwo2 = ["1", "0", "1", "2"];
var taskTwo3 = ["2", "1", "0", "1"];
document.write( taskTwo1 + "<br>" + taskTwo2 + "<br>" + taskTwo3);


// Task-3


for (var i = 1; i <= 10; i++){
        
    document.write(
            "<br>" + i  )
    }





// Task-4

var numberTable =  prompt("Enter a number to show its multiplication table");
var uptoNum = prompt("Enter length multiplication table");

for (var i = 1; i <= uptoNum; i++){
     


document.write(
"<br><br>" + numberTable + "x" + i + "=" + numberTable*i )
    }




// Task-5

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];




// Task-6
for (var i = 1; i <= 15; i++){
        
    document.write("<br> <h5>Counting </h5> " + i )
    }
 

var d = 0;

for (d = 10; d > 0; i--){
    document.write("<br> <h5>Reverse Counting</h5> " + i)
}

var e;

for (e = 10; e <= 20; e++){
if (e % 2 == 0){
    document.write("<br> Even: " + e)
}
}



// Task-7

var items = ["cake","apple pie","cookie","chips","patties"];

var search = prompt("Search your food");

if(items.indexOf(search) !== -1){
    alert("Yes " + search + " is available")
}
else if(items.indexOf(search) !== -2){
    alert("Yes " + search + " is available")
}
else if(items.indexOf(search) !== -3){
    alert("Yes " + search + " is available")
}
else if(items.indexOf(search) !== -4){
    alert("Yes " + search + " are available")
}
else if(items.indexOf(search) !== -5){
    alert("Yes " + search + " are available")
}
else{
    alert("No " + search + " is not available")
}


// Task-8

var arr = [24,53,78,91,12];
var largest = arr[0];

for(var i = 0; i<arr.length; i++){
    if(largest<arr[i]){largest = arr[i];}
}
document.write("<br> Maximum Value in Array is " + largest);




// Task-9

var arrMin = [24,53,78,91,12];
var min = arrMin[0];

for(var i = 0; i < arrMin.length; i++){
    if(arrMin[i] < min){
        min = arrMin[i];
    }
}
document.write("<br> Minimum Value In Array is " + min);



// Task-10


var numOne = 5;
var numTwo = 20;

for (var i = 1; i <= numTwo; i++){
     


document.write("<br>" + numOne*i )

}