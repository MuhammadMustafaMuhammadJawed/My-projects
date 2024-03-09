//1
//  var input = prompt("City Name","City Name")
//  if(input == "karachi"){
//      alert("Welcome to city of light")
// }
// else{document.write("Welcome to pakistan")}

//2
// var input = prompt("Gender","Gender")
// if(input == "male"){
//     alert("Good Morning Sir.")
// }
// if(input == "female"){
//     alert("Good Morning Madam.")
// }

// //3
// var firstcolor = prompt("signalcolor1","color")
// var secondcolor = prompt("signalcolor2","color")
// var thirdcolor = prompt("signalcolor3","color")
// if(firstcolor=="red",secondcolor=="yellow",thirdcolor=="green"){
//     document.write("1.Red :"+"Stop now \n ")
//     document.write("2.yellow :"+"Ready to move \n ")
//     document.write("3.green :"+"move now \n ")
// }

//4
// var input = prompt("Fuel in litres","")
// if(input <0.25 ){
//     alert("Please refill the fuel in your car")
// }
// else{document.write("good to go")}

//5
// var a = 4;
// if (++a === 5){alert("given condition for variable a is true"); } 

// var b = 82; 
// if (b++ === 83){ alert("given condition for variable b is true"); }
// else{alert("not true")}

// var c = 12; 
// if (c++ === 13){ alert("condition 1 is true"); }
//  if (c === 13){ alert("condition 2 is true"); } 
//  if (++c < 14){ alert("condition 3 is true"); } 
//  if(c === 14){ alert("condition 4 is true"); }

// var materialCost = 20000;
//  var laborCost = 2000;
//   var totalCost = materialCost + laborCost;
//    if (totalCost === laborCost + materialCost){ alert("The cost equals"); }  
//  if (true){ alert("True"); } if (false){ alert("False"); }  
//  if("car" < "cat"){ alert("car is smaller than cat"); }

// if (true){ alert("True"); } if (false){ alert("False"); }
// if("car" < "cat"){ alert("car is smaller than cat"); }  

//6
// function calculateGrade(percentage) {
//     if (percentage >= 90) {
//         return 'A';
//     } else if (percentage >= 80) {
//         return 'B';
//     } else if (percentage >= 70) {
//         return 'C';
//     } else if (percentage >= 60) {
//         return 'D';
//     } else if (percentage >= 50) {
//         return 'E';
//     } else {
//         return 'F';
//     }
// }

// function main() {
//     const subject1Marks = parseFloat(prompt("Enter marks obtained in subject 1:"));
//     const subject2Marks = parseFloat(prompt("Enter marks obtained in subject 2:"));
//     const subject3Marks = parseFloat(prompt("Enter marks obtained in subject 3:"));
//     const totalMarks = parseFloat(prompt("Enter total marks:"));

//     const totalObtainedMarks = subject1Marks + subject2Marks + subject3Marks;
//     const percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;
//     const grade = calculateGrade(percentage);

//     console.log("\nTotal Marks:", totalMarks);
//     console.log("Marks Obtained:", totalObtainedMarks);
//     console.log("Percentage:", percentage.toFixed(2) + "%");
//     console.log("Grade:", grade);

//     if (grade === 'F') {
//         console.log("Remarks: Fail");
//     } else {
//         console.log("Remarks: Pass");
//     }
// }

// main();

//7
// function guessNumber() {
//     var secretNumber = 5; // Generate a random number between 1 and 10
//     var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

//     if (userGuess === secretNumber) {
//         console.log("Bingo! Correct answer.");
//     } else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
//         console.log("Close enough to the correct answer.");
//     } else {
//         console.log("Incorrect guess. The secret number was: " + secretNumber);
//     }
// }

// guessNumber();

//8
// Prompt the user to enter a number
// var number = parseInt(prompt("Enter a number:"));

// // Check if the number is divisible by 3
// if (number % 3 === 0) {
//     console.log(number + " is divisible by 3.");
// } else {
//     console.log(number + " is not divisible by 3.");
// }

//9
// Prompt the user to enter a number
// var number = parseInt(prompt("Enter a number:"));

// Check if the number is even or odd
// if (number % 2 === 0) {
//     console.log(number + " is an even number.");
// } else {
//     console.log(number + " is an odd number.");
// }

//10

// var temperature = (prompt("Enter the temperature:"));


// if (temperature > 40) {
//     console.log("It is too hot outside.");
// } else if (temperature > 30) {
//     console.log("The Weather today is Normal.");
// } else if (temperature > 20) {
//     console.log("Today’s Weather is cool.");
// } else if (temperature > 10) {
//     console.log("OMG! Today’s weather is so Cool.");
// } else {
//     console.log("It's freezing outside!");
// }

//11
// Prompt the user to enter the first number, operation, and the second number
// var firstNumber = parseFloat(prompt("Enter the first number:"));
// var operation = prompt("Enter the operation (+, -, *, /, %):");
// var secondNumber = parseFloat(prompt("Enter the second number:"));

// // Perform the calculation based on the operation
// var result;
// if (operation === "+") {
//     result = firstNumber + secondNumber;
// } else if (operation === "-") {
//     result = firstNumber - secondNumber;
// } else if (operation === "*") {
//     result = firstNumber * secondNumber;
// } else if (operation === "/") {
//     if (secondNumber !== 0) {
//         result = firstNumber / secondNumber;
//     } else {
//         console.log("Error: Cannot divide by zero.");
//     }
// } else if (operation === "%") {
//     if (secondNumber !== 0) {
//         result = firstNumber % secondNumber;
//     } else {
//         console.log("Error: Cannot mod by zero.");
//     }
// } else {
//     console.log("Error: Invalid operation.");
// }

// // Display the result to the user
// if (result !== undefined) {
//     console.log("Result:", result);
// }

