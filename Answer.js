//Exercise 1 & 3

document.write("<h3> Exercise  </h3>");

for (let i = 2; i <= 7; i++) {

    document.write(i);
  
  }


document.write("<h3> Exercise 1 & 3 </h3>");

var today = new Date();
var day = today.getDay();
var dayList = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

var date =  today.getDate();
var month = today.getMonth() + 1;
var year = today.getFullYear();

//display current date
document.write ("Today is : " + dayList[day] + "<br>");
document.write ("Date : " + date + "/" + month +"/" + year );

var hour = today.getHours();
var minutes = today.getMinutes();
//var second = today.getSeconds();
var ampm = (hour >= 12)? "PM" : "AM" ;

document.write("<br> Time : " + hour + ":" + minutes + " " + ampm +"<br>");

//-------------------------------------------------------------------------------------------------------------
//Exercise 4

//document.write("<h3> Exercise 4: Area of triangle </h3>");

function answer(){

    var h = Number(document.getElementById("h").value);
    var b = Number(document.getElementById("b").value);

    var a = (b*h)/2;

    document.getElementById("Answer").innerHTML = (" Area of triangle is: " + a + "cm2");

}

//-------------------------------------------------------------------------------------------------------------
//Exercise 6

//document.write("<h3> Exercise 6: Leap Year </h3>");

function answer6() {

    var y = Number(document.getElementById("year").value);

    if (y % 4 == 0){
        document.getElementById("Answer6").innerHTML = (y + " is a leap year");
    } else {
        document.getElementById("Answer6").innerHTML = (y + " is not a leap year");
    }

}

//-------------------------------------------------------------------------------------------------------------
//Exercise 7
document.write("<h3> Exercise 7 : 1st January on Sunday </h3>");

for (var year = 2014; year <= 2050; year++) {
    var today = new Date(year, 0);
    
    if (today.getDay() === 0)
    {
        document.write ("1st January is being a Sunday in " + year + "<br>");
        
    }

}

//-------------------------------------------------------------------------------------------------------------
//Exercise 8

function number8()
{
    var n = Number(document.getElementById("n").value);
    var random = Math.floor((Math.random() * 10 + 1));

    if (n >= 1 && n <= 10) 
    {
        if (n == random){
            document.getElementById("Answer8").innerHTML = ("The answer is "+ random +" .. Good Job!");
        }else {
            document.getElementById("Answer8").innerHTML = ("Oh no! The answer is "+ random +" .. Aww Nice Try");
        }
    }
    else {
        document.getElementById("Answer8").innerHTML = ("Invalid value! Try insert correct value");
    }
}

//-------------------------------------------------------------------------------------------------------------
//Exercise 9: Calculate Hari Malaysia

document.write("<h3> Exercise 9 : HARI MALAYSIA </h3>");
var todays = new Date();
//Dapatkan harini punya tahun
var HM = todays.getFullYear();

if (todays.getMonth() >= 8 && todays.getDate() > 16)
    {
        //tambah setahun untuk hari malaysia tahun depan
        HM = HM + 1;
    }

let CHM = new Date(HM, 8, 16);

//Dapatkan milisaat untuk sehari = around 86,400,000
var aDay = 1000*60*60*24;

var DHM = Math.ceil((CHM.getTime() - todays.getTime()) / (aDay));

//document.getElementById("Answer9").innerHTML = (Math.ceil((HM.getTime() - todays.getTime()) / (aDay)) + "days until HARI MALAYSIA! ");
document.write(Math.ceil((CHM.getTime() - todays.getTime()) / (aDay)) + " days until HARI MALAYSIA! <br>");
document.querySelector("Answer9").innerHTML = (DHM);


//-------------------------------------------------------------------------------------------------------------
//Exercise 10 

function multiply(){
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);

    if (typeof n1 == 'number'){
    var multiply = n1*n2;
    document.getElementById("Answer10").innerHTML = ("The answer is for "+ n1+ " x "+ n2+ " is: " +multiply);
    }
    else {(document.getElementById("Answer10").innerHTML = ("Invalid value! Try again"));
    }
}

function divide(){
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);

    if (typeof n1 == 'number'){
    var divide = (n1/n2).toFixed(2);
    document.getElementById("Answer10").innerHTML = ("The answer is for "+ n1+ " / "+ n2+ " is: " +divide);
    }
    else {(document.getElementById("Answer10").innerHTML = ("Invalid value! Try again"));
    }
}

//-------------------------------------------------------------------------------------------------------------
//Exercise 11

function fahrenheit(){

    var n1 = document.getElementById("num1").value;
    var f1 = (n1 * 9/5) + 32;
    document.getElementById("Answer11").innerHTML = (n1 + " Celcius in Fahrenheit is " +f1);
    
}

function celcius(){

    var n1 = document.getElementById("num1").value;
    var c1 = ((n1 - 32) *5/9).toFixed(2);
    document.getElementById("Answer11").innerHTML = (n1 + " Fahrenheit in Celcius is " +c1);
    
}

//-------------------------------------------------------------------------------------------------------------
//Exercise 15

function answer15(){

    var number1 = parseInt(document.getElementById("number1").value);
    var x = number1 - 13;

    if (x >13){
        var x = x*2;
        document.getElementById("Answer15").innerHTML = ("Answer for "+ number1 +" is : "+ x);
    }else {
        document.getElementById("Answer15").innerHTML = ("Answer for "+ number1 +" is : "+ x);
    }
}

//-------------------------------------------------------------------------------------------------------------
//Exercise 16

function answer16(){

    var n1 = parseInt(document.getElementById("v1").value);
    var n2 = parseInt(document.getElementById("v2").value);
    var x = n1 + n2;

    if(n1 == n2){
        var x = (n1+n2)*3;
        document.getElementById("Answer16").innerHTML = (n1+ " + " +n2 +" is : " + x);
    }else { document.getElementById("Answer16").innerHTML = (n1+ " + " +n2 +" is : " + x);}
}



 



