// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// var city=prompt("please Enter Your city Name")
// if(city=="karachi"){
//     document.getElementById("welcome").textContent="Welcome to city of light"
// }
// else{
//     document.getElementById("welcome").textContent="Welcome to "+city
// }

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

// var gender=prompt("please Enter Your gender");
// if(gender=="male"){
//        document.getElementById("gender").textContent="Good Morning Sir"

// }

// else{
//     if(gender=="female"){
//         document.getElementById("gender").textContent="Good Morning ma'am"
//     }
//     else{
//         document.getElementById("gender").textContent="Good Morning"
//     }

// }

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
// Signal
// color        Message
// Red          Must Stop
// Yellow       Ready to move
// Green        Move now

// var color_name=prompt("please a color");
// if(color_name=="red"){
//     document.getElementById("color").textContent=" Must Stop "

// }

// else{
//     if(color_name=="yellow"){
//           document.getElementById("color").textContent=" Ready to move"

//     }
//     else{
//         if(color_name=="green"){
//               document.getElementById("color").textContent="Move now"
//         }
//         else{
//              document.getElementById("color").textContent="Invalid color"
//         }
//     }
// }

// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”

// var fuel=+prompt("please Enter current fuel in liters" )
// if(fuel<=0.25){
//     document.getElementById("refil").textContent="Please refill the fuel in your car"
// }
// else{
//     document.getElementById("refil").textContent="safe journy"
// }

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");

// }

// message display

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// message didnot display b/c first b print after increment in b

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// condition 2 and 4 are correct

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// message show that cost are equal

// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }

//     message show true

//  if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

// message display b/c (r) and (t)

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

// var obtain_marks=+prompt("Please enter Obtain marks");
// var total_marks=+prompt("Please enter Total marks");
// var percentage= (obtain_marks/total_marks)*100;

// document.getElementById("total_marks").textContent="Total Marks : "+total_marks;
// document.getElementById("obtn_marks").textContent="obtained Marks : "+obtain_marks;

// if(percentage>=80){

// document.getElementById("percentage").textContent="Percentage : "+percentage+"%"
// document.getElementById("grade").textContent="Grade : A-one"
// document.getElementById("remark").textContent="Remark : Excellent ";

// }
//    else if(percentage>=70){

//         document.getElementById("percentage").textContent="Percentage : "+percentage+"%"
//         document.getElementById("grade").textContent="Grade : A"
//         document.getElementById("remark").textContent="Remark : Good ";

//     }

//       else if(percentage>=60){

//             document.getElementById("percentage").textContent="Percentage : "+percentage+"%"
//             document.getElementById("grade").textContent="Grade : B"
//             document.getElementById("remark").textContent="Remark : You need to improve";

//         }
//            else if(percentage<=60){

//                 document.getElementById("percentage").textContent="Percentage : "+percentage+"%"
//                 document.getElementById("grade").textContent="Grade : fail"
//                 document.getElementById("remark").textContent="Remark : Sorry! ";

//             }
//              else{
//                    document.getElementById("else").textContent="Please Retry"
//                  }

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// var secretNumber = Math.floor(Math.random() * 10) + 1;

// var userGuess = +prompt("Guess the secret number (between 1 and 10):");

// if (userGuess === secretNumber) {
//     alert("Bingo! Correct answer");
// } else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
//     alert("Close enough to the correct answer");
// } else {
//     alert("Try again!");
// }

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

// var number = +prompt("Enter a number to check if it is divisible by 3:");

// if (number % 3 === 0) {
//     alert("The number " + number + " is divisible by 3.");
// } else {
//     alert("The number " + number + " is not divisible by 3.");
// }

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

// var number = +prompt("Enter a number to check if it is even or odd:");

// if (number % 2 === 0) {
//     alert("The number " + number + " is even.");
// } else {
//     alert("The number " + number + " is odd.");
// }

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// var temperature = +prompt("Enter the temperature:");

// if (temperature > 40) {
//     alert("It is too hot outside.");
// } else if (temperature > 30) {
//     alert("The Weather today is Normal.");
// } else if (temperature > 20) {
//     alert("Today's Weather is cool.");
// } else if (temperature > 10) {
//     alert("OMG! Today's weather is so Cool.");
// } else {
//     alert("It's really cold outside!");
// }

// Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.







// var firstNumber = +prompt("Enter the first number:");

// var secondNumber = +prompt("Enter the second number:");

// var operation = prompt("Enter the operation (+, -, *, /, %):");

// var result;

// if (operation === "+") {
//   result = firstNumber + secondNumber;
//   alert(
//     "The result of " + firstNumber + " + " + secondNumber + " is: " + result
//   );
// } else if (operation === "-") {
//   result = firstNumber - secondNumber;
//   alert(
//     "The result of " + firstNumber + " - " + secondNumber + " is: " + result
//   );
// } else if (operation === "*") {
//   result = firstNumber * secondNumber;
//   alert(
//     "The result of " + firstNumber + " * " + secondNumber + " is: " + result
//   );
// } else if (operation === "/") {
//   if (secondNumber !== 0) {
//     result = firstNumber / secondNumber;
//     alert(
//       "The result of " + firstNumber + " / " + secondNumber + " is: " + result
//     );
//   } else {
//     alert("Division by zero is not allowed.");
//   }
// } else if (operation === "%") {
//   result = firstNumber % secondNumber;
//   alert(
//     "The result of " + firstNumber + " % " + secondNumber + " is: " + result
//   );
// } else {
//   alert("Invalid operation. Please enter one of the following: +, -, *, /, %");
// }
