// Chapter 10-11 

// Question 1:




// Write a program to take “city” name as input from user.
// If user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”





// Answer 

// let city = prompt("please enter your city name?");
// if (city === "karachi"){


//     alert("Welcome to city of lights");
// }





// Question 2:



// Write a program to take “gender” as input from user.
// If the user is male, give the message: Good Morning Sir.
// If the user is female, give the message: Good Morning Ma’am.









// Answer 

// let gender = prompt("Please enter your name  (male/female)");

//  if (gender === "male" || gender === "asad" ) {
//   alert("Good Morning Sir");
// } 
// else if (gender === "female"  || gender === "shazia") {
//   alert("Good Morning Ma’am");
// }



// Question 3:




// Write a program to take input color of road traffic signal from the user & show the message according to this table:

// Signal color	Message
// Red	Must Stop
// Yellow	Ready to move
// Green	Move now



// Answer 

// let trafficSignal = prompt("Please enter traffic signal color (red/yellow/green)");

// if (trafficSignal === "red") {
//   alert("Must Stop");
// } 
// else if (trafficSignal === "yellow") {
//   alert("Ready to move");
// } 
// else if (trafficSignal === "green") {
//   alert("Move now");
// }





// Question 4:




// Write a program to take input remaining fuel in car (in litres) from user.
// If the current fuel is less than 0.25 litres, show the message:
// “Please refill the fuel in your car.”




// Answer 

// let fuel = 0.24;
// if (fuel < 0.25){

//     alert("Please refill the fuel in your car");
// }





// Question 5:




// Run this script, & check whether alert message would be displayed or not. Record the outputs.

// 






// Answer 

// let a = 4;
// if (++a === 5){

// alert("true");
// }

//   b= 82;
// if (b++ === 83){

// alert("false");
//  }



//  let c= 12;
//  if (c++ === 13){

// alert(" false");
// }





// Question 6:



// Write a program to take input the marks obtained in three subjects & total marks.
// Compute & show the resulting percentage on your page.
// Take percentage & compute grade as per following table.
// Show the total marks, marks obtained, percentage, grade & remarks.

// Answer 






// let sub1 = +prompt("enter yur mark of sub1");
// let sub2 = +prompt("enter yur mark of sub2");
// let sub3 = +prompt("enter yur mark of sub3");
// let totalmarks = sub1+ sub2+sub3;

// let percentage = obtainmarks / totalmarks * 100 ;


// let grade 
// let remark 

// if (percentage >= 90){
//     grade = "A-one";
//   remarks = "Excellent";
// } 

// else if(percentage >= 60){
//     grade = "A-one";
//   remarks = "Excellent";
// } 



// else if(percentage >= 50){
//     grade = "A-one";
//   remarks = "Excellent";
// } 

// else{

//     grade = "fail";
//   remarks = "sorry";
// } 







// Question 7:



// Guess game:
// Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct answer.”
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer.”


// Answer 


// var secret = 7;
// var guess = +prompt("Guess the secret number (1 to 10):");

// if (guess === secret) {
//   alert("Bingo! Correct answer");
// } else if (guess + 1 === secret) {
//   alert("Close enough to the correct answer");
// }




// Question 8:




// Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.




// Answer 

// var num = +prompt("Enter a number:");
// if (num % 3 === 0) {
//   alert("The number is divisible by 3");
// } else {
//   alert("The number is not divisible by 3");
// }








// Question 9:



// Write a program that checks whether the given input is an even number or an odd number.

// Answer 

// var num = +prompt("Enter a number:");
// if (num % 2 === 0) {
//   alert("The number is even");
// } else {
//   alert("The number is odd");
// }












// Question 10:



// Write a program that takes temperature as input and shows a message based on the following criteria:
// a. T > 40 → “It is too hot outside.”
// b. T > 30 → “The Weather today is Normal.”
// c. T > 20 → “Today’s Weather is cool.”
// d. T > 10 → “OMG! Today’s weather is so Cool.”


// Answer 

// var temp = +prompt("Enter temperature:");
// if (temp > 40) {
//   alert("It is too hot outside.");
// } else if (temp > 30) {
//   alert("The Weather today is Normal.");
// } else if (temp > 20) {
//   alert("Today’s Weather is cool.");
// } else if (temp > 10) {
//   alert("OMG! Today’s weather is so Cool.");
// }








// Question 11:






// Write a program to create a calculator for +, -, *, / & % using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.








// Answer 


// var num1 = +prompt("Enter first number:");
// var num2 = +prompt("Enter second number:");
// var op = prompt("Enter operation (+, -, *, /, %):");
// var result;

// if (op === "+") {
//   result = num1 + num2;
// } else if (op === "-") {
//   result = num1 - num2;
// } else if (op === "*") {
//   result = num1 * num2;
// } else if (op === "/") {
//   result = num1 / num2;
// } else if (op === "%") {
//   result = num1 % num2;
// } else {
//   alert("Invalid operation!");
// }

// alert("Result: " + result);







// Chapter 12-14 



// Question 1:



// Write a program that takes a character (number or string) and checks whether it is a number, uppercase letter, or lowercase letter.

 // Answer 

// let char = prompt("Enter any character:");

// if (char >= 'A' && char <= 'Z') {
//   alert("It is an uppercase letter.");
// } 
// else if (char >= 'a' && char <= 'z') {
//   alert("It is a lowercase letter.");
// } 
// else if (char >= '0' && char <= '9') {
//   alert("It is a number.");
// } 
// else {
//   alert("It is not a letter or number.");
// }




// Question 2:

// Write a JavaScript program that accepts two integers and displays the larger. Also show if they are equal.

// Answer 

// let num1 = +prompt("Enter first number:");
// let num2 = +prompt("Enter second number:");

// if (num1 > num2) {
//   alert("The first number is larger.");
// } 
// else if (num2 > num1) {
//   alert("The second number is larger.");
// } 
// else {
//   alert("Both numbers are equal.");
// }
















// Question 3:

// Write a program that takes input a number from user & states whether the number is positive, negative, or zero.






// Answer 

// let num = +prompt("Enter a number:");

// if (num > 0) {
//   alert("The number is positive.");
// } 
// else if (num < 0) {
//   alert("The number is negative.");
// } 
// else {
//   alert("The number is zero.");
// }





// Question 4:

// Write a program that takes a character and returns true if it is a vowel, false otherwise.





// Answer 

// let char = prompt("Enter a single letter:");

// if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
//     char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
//   alert("True - It is a vowel.");
// } 
// else {
//   alert("False - It is not a vowel.");
// }




// Question 5:

// Store a correct password in a JS variable. Ask user to enter password and validate.




// Answer 

// let correctPassword = "abc123";
// let userPassword = prompt("Enter your password:");

// if (!userPassword) {
//   alert("Please enter your password.");
// } 
// else if (userPassword === correctPassword) {
//   alert("Correct! The password you entered matches the original password.");
// } 
// else {
//   alert("Incorrect password.");
// }






// Question 6:


// Fix this incorrect code:


// Answer 

// var greeting;
// var hour = 13;
// if (hour < 18) {
//   greeting = "Good day";
// else
//   greeting = "Good evening";
// }




// var greeting;
// var hour = 13;

// if (hour < 18) {
//   greeting = "Good day";
// } 
// else {
//   greeting = "Good evening";
// }

// alert(greeting);




// Question 7:



// Write a program that takes time in 24-hour format (like 1900 = 7pm) and displays greeting message.



// Answer 

// let time = +prompt("Enter time in 24-hour format (e.g. 1900):");

// if (time >= 0 && time < 1200) {
//   alert("Good Morning!");
// } 
// else if (time >= 1200 && time < 1700) {
//   alert("Good Afternoon!");
// } 
// else if (time >= 1700 && time < 2100) {
//   alert("Good Evening!");
// } 
// else if (time >= 2100 && time <= 2359) {
//   alert("Good Night!");
// } 
// else {
//   alert("Invalid time entered.");
// }

















 
