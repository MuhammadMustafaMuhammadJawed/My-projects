var Score = null;
var Converted = Number(Score);
// console.log(typeof Converted);
// console.log( Converted);

//true=>1
//false=>0
//"333anm"=>NaN


// var LoggedIn = 1 true
// var LoggedIn = 0 false
// var LoggedIn = "" false
//  var LoggedIn = "Mustafa" true

// var Conversion = Boolean(LoggedIn)
// console.log(Conversion);





// console.log(2+3);
// console.log(2-3);
// console.log(2*3);
// console.log(2/3);
// console.log(2%3);
// console.log(2**3);


//************prefix and postfix************//
// let counter = 100
// counter++;
// ++ counter;
// console.log(counter);

//datatype ==> permitive and non permitive  

//permitive==>string,number,boolean,undefined,symbol,BigInt,Null
//reference type(Non Permitive)==>array,objects,functions ==> return object


// let id = Symbol("abs");
// let anotherid = Symbol("abs");
// console.log(id===anotherid); ==> false 


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//stack and heap memory
//stack(Permitive)==> we get copy
//heap(Non Permitive)==>Get reference from original
//********************************************** */

// let Name = "Mustafa"
// let Age = "17"
// console.log(`Hello my name is ${Name} And my age is ${Age}`);



// let text = "Mr. Blue has a blue house";
// let position = text.search("house");
// console.log(position)



let anotherName = new String("Mustafa")
// let Name = "      Mustafa       "
// console.log(Name.indexOf('a'));
// console.log(Name.charAt(5));
// console.log(Name.toLowerCase());
// console.log(Name.toUpperCase());
// console.log(Name.toUpperCase());
// console.log(anotherName.search("t"));
// console.log(Name.slice(-7,4));
// console.log(Name.trim());
// console.log(Name);
// let url = "https://www.mustafa.com/mustafa%20as.com"
// let anotherString = url.replace("%20","-")
// console.log(anotherString);

// let myName = "mustafa--ch--hc"
// let arrayedName = myName.split("--")
// console.log(arrayedName);

// let boldMethod = anotherName.bold()
// console.log(boldMethod);

// document.write(anotherName.fontsize(+40));


// ****************maths and number ***************

// const number = 100
// console.log(number);

// const newNumber  = new Number(20.895632)
// console.log(newNumber.toExponential());

// const min = 10
// const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1) )+min);



// ***********date**************

// let myDate = new Date()
// console.log(typeof myDate);
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(myDate.toISOString());

// let createdDate = new Date(2023,0,14)
// let createdDate = new Date("2023-01-14")
// let createdDate = new Date("12-12-2024")
// console.log(createdDate);


let nowDate = Date.now()
console.log(nowDate);
console.log(nowDate.toLocaleString('default', {
 weekday:"long"

}))
// console.log(nowDate/1000);===>  milliseconds==> seconds
// console.log(Math.floor(nowDate/1000));===>  milliseconds==> seconds