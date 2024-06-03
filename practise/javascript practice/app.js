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


// let nowDate = Date.now()
// console.log(nowDate);
// console.log(nowDate.toLocaleString('default', {
//  weekday:"long"

// }))
// console.log(nowDate/1000);===>  milliseconds==> seconds
// console.log(Math.floor(nowDate/1000));===>  milliseconds==> seconds




// ***********************ARRAY***********************
// let myArr = new Array(1, 2, 3, "Mustafa")

// array copy operation create shallow copies(means they share same reference point(any change so change in original array))

// methods****************
// myArr.push(5)==>add in last in array
// myArr.pop() ==>remove from last in array
// myArr.unshift(9) ==> add in starting
// myArr.shift() ==> remove from starting

// console.log(myArr.includes(5)); ==> Ask Question
// console.log(myArr.indexOf(19)); ==> element not present so -1
// console.log(myArr.join(". ")); ==>convert array to string

// const newArr = ["a","b"  ,"c","d","e","f"]
// console.log(newArr);
// console.log(newArr.slice(2,5)); ==> makes copy of the specified portion
// console.log(newArr.splice(2,5)); ==> REemoves the specified portion from original array



// var num1 = [1,2,3,4,5,6]
// var num2 = [7,8,9,10,11,12]

// var allNum = num1.concat(num2)
// var allNum = [...num1,...num2]==> join two arrays
// console.log(allNum);


// var arr1 = [1,2,3,[4,5,6,7],7,8,[9,10,[11,12,12]]]
// var realArr = arr1.flat(Infinity)
// console.log(realArr);

// console.log(Array.isArray("mustafa"));
// console.log(Array.from("mustafa"));
// console.log(Array.from({name:"mustafa"}));



// ****************objects*******************

// singleton
// Object.create ===> create object by constructor

// literal method
// var JsUser = {}==> literal method`

// const mySymb = Symbol("key1")


// const JsUser =  {
// [mySymb]:"Hello",    
// name:"Mustafa",
// Age : 17,
// email: "Mustafa@google.com",
// IsLoggedIn:false,
// }
// JsUser.Age = 18 ==>to change value

// Object.freeze(JsUser)==>no changes in object 
// console.log(JsUser[mySymb]); ==>Way to call object
// console.log(JsUser.name);==>Way to call object

// JsUser.greetings = function () {
//     console.log("Hello User");
// }
// JsUser.greetingtwo = function () {
//     console.log(`Hello User,${this.name}`);
// }
// console.log(JsUser.greetings());
// console.log(JsUser.greetingtwo());


// const usr = new Object()
// // console.log(usr);

// const newUser = {}
// newUser.name = "Mustafa"
// newUser.age = 17
// newUser.id = "123aaa"

// console.log(newUser);


// const regularUser = {
//     email: "someone@gmail.com",
//     fullname: {
//         userfullname: {
// firstname:"Mustafa",
// lastname:"Khadeli"

//         }
//     }

// }

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = { 1: "a", 2: "b" }
const obj2 = {3:"a",4:"b"}

// const obj3 = Object.assign({},obj1,obj2)===>to merge objects
// const obj3 = {...obj1,...obj2}===>to merge objects
console.log(obj3);