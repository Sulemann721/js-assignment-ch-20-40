

//1:WRITE A JS SWITCH STATEMANET THAT CHECK A VALUE OF VARIABLE AND PERFORM DIFFENT CASES

/*  var num1 = +prompt("Enter first value: ");
var opr=prompt("Enter Operator: ");
var num2=+prompt("Enter Second Value: ");
var result;

switch (opr){
    case "+": {
        if(opr =="+"){
result=num1*num2;
console.log("First Value + Second Value is: " + result);
break;
        }
    }

    case "-": {
        if(opr =="-"){
result=num1-num2;
console.log("First Value - Second Value is: " + result);
break;
        }
    }
        


    case "*": {
        if(opr =="*"){
result=num1*num2;
console.log("First Value * Second Value is: " + result);
break;
        }
    }
    case "/": {
        if(opr =="/"){
result=num1/num2;
console.log("First Value / Second Value is: " + result);
break;
        }
    }
} 
 */


//2:write a program to check the city name given by the user match or not


/* var city=prompt("Enter city to check");

city= city.toLowerCase();

switch (city){
    case 'karachi':{
        if(city == "karachi");
        console.log("karachi is present in the list");
        break;
    }

    case 'islamabad':{
        if(city == "islamabad");
        console.log("islamabad is present in the list");
        break;
    }

    case 'peshawer':{
        if(city == "peshawer");
        console.log("peshawer is present in the list");
        break;
    }
    default:
    console.log(city +"is not present in the list");

} */

//2: ask name and assign value to user name
/* function askName(){
 var name = prompt("Enter Your name: ");
return name;
}
 var userName= askName();
 console.log( "User Name is : " + userName); */




// 3: nested function example 
/* function live(){
    console.log("i live in karachi ")
}
function age(){
    console.log("i am 30 year old")
}
function myName(){
    console.log("My name is  Sulleman")
    
    age();
    live();
}
myName(); */



// 4: funtion that take user input and  alart the name 
/* function userName(){
    var  name=prompt(" Enter Your name : ");
    return name;
}
var z= userName();
alert("Your name is : " +z); */




//5: display a function that has 3 parameters 
/* function contact(a, b, c){
    alert(a + " " + " " +b + " " +c);
}
var z="hello"; 
contact(z, "suleman " ,10); */




//6: code a function that has 2 para meters....
/* function concat (a,b){

    var z=a+b;
    alert(z)
}
concat( 10,20); */


//7: function that take 43 parameter and multiply them 
/* function multi(a,b,c){
    var z= a*b*c;
    return z;
}

var result = multi(2,2,2);
alert(result); */




//8: average of numbers 
/* function average(){
    var inputArray = [];
     var size = 5;
      //Maximum Array size
       for(var i=0; i<size; i++) { 
     inputArray[i] = prompt('Enter Element ' + (i+1)); 
     var sum  = + inputArray[i];
     
    } 
    return sum;
}
var result = average();
alert(result); */




//9:function that take 2 parameter aqnd sum them 
/* function add(a,b){
    result=a+b;
    alert(result)
}

add(10,20); */

//15. Write a function which tells the presense of (word) in an
//array = ['zaid','haris','raza','abubakar','hassan','hussain','fatima']
//result should be in true or false

/* var input=prompt("Enter Your City: ");
input=input.toLowerCase();
var arr=['karachi','islamabad','lahore','peshawer'];

for(i=0; i<=arr.length;i++){
    if(arr[i]===input){
        alert(true)
        break;
    }
    else{
        alert(false);
        break;
    }
} */


//16. Write a function which repeat (letter) 10 times.
//Hint: "abcde" str.repeat(10)

/*  function repeatLetter(letter) {
    if (typeof letter === 'string' && letter.length === 1) {
      return letter.repeat(10);
    } else {
      console.error('Please provide a single letter as input.');
      return null;
    }
  }
  
  // Example usage:
  var repeatedLetters = repeatLetter('A');
  console.log(repeatedLetters); 
   */

//write a function which reverse array = ['a','b','c','d','e']
/*   function reverseArray(arr) {
    if (Array.isArray(arr)) {
      return arr.reverse();
    } else {
      console.error('Please provide an array as input.');
      return null;
    }
  }
  var originalArray = ['a', 'b', 'c', 'd', 'e'];
  var reversedArray = reverseArray(originalArray.slice()); 
  console.log(reversedArray); */

// 11: retrun value of variable and save it in a function 
/* function returnValue(){
var a=10;
var b=20;
var c=a+b;
return c;4
alert(sum); */

//13: function that sets year in date object 
/* function setYear(){
    var date = new Date();
    date.setFullYear(2000);
    var newYear = date.getFullYear();
   return newYear ;

}

var result= setYear();
alert(result); */


//14: write a function to calculate age

/* function ageCalc(){
 var dob= new Date("feb 26,1995");
 var dobMili=dob.getTime();

 var today = new Date();
 var todayMili=today.getTime();
 var diff =todayMili-dobMili;

 var accAge= Math.floor(diff/(1000*60*60*24*30*12));
 return accAge;
}
var myAge= ageCalc();
console.log("Your age is : " ,+ myAge) */

//




//***************************************


//Date and time 
/* 

let dt= new Date();

// year month day hour minute second
 let newDate= new Date(2003,2,25, 11,20,2);

console.log(newDate);

let yr= newDate.getFullYear();
console.log("year is:"+yr );

let dat= newDate.getDate();
console.log("Date is:"+dat);



let mth= newDate.getMonth();
console.log("Date is:"+mth );

let time= newDate.getUTCHours();
console.log("Time is: "+time);

newDate.setDate(26);
newDate.setMonth(1);
newDate.setFullYear(1993);
console.log(newDate); */


 //slice method date n time 

/*  var date =new Date();
 var a=date.toString();


 console.log(date);
console.log(typeof a);

var b=a.slice(11,15);

console.log(a);
console.log(b); */

// Extract all parts of the Date and Time and assign it to the variable
//which has not been declared beforehand.
// Get the current date and time

/* var currentDate = new Date();

// Extract different parts of the date and time
var year = currentDate.getFullYear();
var month = currentDate.getMonth(); 
var day = currentDate.getDate();
var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds();
var milliseconds = currentDate.getMilliseconds();

// Output the extracted parts
console.log('Year:', year);
console.log('Month:', month);
console.log('Day:', day);
console.log('Hours:', hours);
console.log('Minutes:', minutes);
console.log('Seconds:', seconds);
console.log('Milliseconds:', milliseconds);
 */





//Chapter 38 (local vs global variable)
//1: usage of local   Variable in js  Example

/* function add(a,b){
    var result=a+b;
    console.log("result is : " + result);
}
add(10,5);
add(20,100);
add(500,1000); */




//2:Accesing a global  Variable in js  

/* var a="Welcome to js World";
function welcome(){
    console.log(a);
}
welcome(); */


