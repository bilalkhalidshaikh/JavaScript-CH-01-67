var emptyarr1 = ["  "];
var emptyarr2 = ["  "];

var strarr = ["This is" , "Array"];
var numarr = [20 , 50, 70, 90];
var boleanarr = [true ,  , false];
var mixedArray = [1, "Bob", "Now is", true];
  
var edupak = [ "SSC"," HSC", "BCS", "BS", "BCOM"," MS", "M.Phil" ,"PhD"]

document.write("   <h1>Qualifications : </h1>" + "<br>" + "<strong>" + edupak[0]  + '<hr>' +  edupak[1] + '<hr>' + edupak[2] + '<hr>' + edupak[3]+ '<hr>' + edupak[4]+ '<hr>' + edupak[5]+ '<hr>' + edupak[6]+ '<hr>' + edupak[7] + "<hr>" + "</strong>" + "<br>" + "<br>");


// Task no # 8

var stuname = ["Bilal" , "Wasiq" , "Asad"];
var totalscrore = [500];
var stuobtscrore = [320 , 230 , 480];

document.write("Score of " + stuname[0] + " is : " + stuobtscrore[2] +"." +"Percentage: " + stuobtscrore[2] / totalscrore * 100 + "%"  + "<br>"  + "<br>");
document.write("Score of " + stuname[1] + " is : " + stuobtscrore[1] +"." +"Percentage: " + stuobtscrore[1] / totalscrore * 100 + "%"  + "<br>"  + "<br>");
document.write("Score of " + stuname[2] + " is : " + stuobtscrore[0] +"." +"Percentage: " + stuobtscrore[0] / totalscrore * 100 + "%" );