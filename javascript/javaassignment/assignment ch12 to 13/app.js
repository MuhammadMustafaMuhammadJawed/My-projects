
// 1
// var num1 = +prompt('enter first number')
// var num2 = +prompt('enter second number')

// if (num1 > num2) {
//     console.log(num1 + ' greater than ' + num2)
// }
// else if (num1 < num2) {
//     console.log(num1 + ' less than ' + num2)
// } else { console.log("both are equal") }


// 2
var input = prompt('Enter number, Character or Alphabet')

if (!isNaN(input)){
    console.log(input+"is a number")
}else if(input===input.toUpperCase){
console.log(input + "it is capital")
}
else{console.log(input + 'it is small')}

