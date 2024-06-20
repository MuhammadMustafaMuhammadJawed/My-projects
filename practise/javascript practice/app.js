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

// const obj1 = { 1: "a", 2: "b" }
// const obj2 = {3:"a",4:"b"}

// const obj3 = Object.assign({},obj1,obj2)===>to merge objects
// const obj3 = {...obj1,...obj2}===>to merge objects
// console.log(obj3);




// const course = {
// courseName: "Web Development",
// courseTeacher:"ABC",
// courseFee : "free"
// }


// const {courseTeacher : teacher} = course  ==> Destructure Object
// console.log(teacher);





// ***********functions ************

// function addNum(num1,num2) {
//     return num1+num2

// }
// const result = addNum(33,44)
// console.log("result", result);




// function loggedIn (userName = "default Name"){
// if(!userName){
//     console.log("please enter your name");
//     return
// // }
//     return `${userName} is logged in`
// }
// console.log(loggedIn(prompt("enter your name")));


// function calculateCartPrice (val1 , val2,...num1 ){
//     return num1
// }
// console.log(calculateCartPrice(500, 6000,6041));

// const user = {
//     userName: "Mustafa",
//     price: 199,
// }

// function handleObject (anyuser){
//     console.log(`user name is ${anyuser.userName} and the price is ${anyuser.price}`)
// }
// handleObject(user)

// const myNewArr = [500,400,300,200]

// function returnArr (anyArr){
//     return anyArr[2]
// }
// console.log(returnArr(myNewArr));

// {}==>scope


// console.log(addOne(5));
// function addOne (num){
//     return num + 1
// }

// var functionn = function addTwo(num){
//     return num +2
// }
// console.log(functionn);

// const user = {
//     username: "mustafa",
//     userage: 19,
// welcomemessage: function (){
//     console.log(`${this.username}, welcome to this website`);
// // console.log(this);
// }

// }
// user.welcomemessage()
// user.username = "sam"
//user.welcomemessage()
// console.log(this);


// const abc = ()=>{
//     let userName = "ALI"
//     console.log(this);
// }
// abc()



// let addTwo = (num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(8,9));

//  OR
// let addTwo = (num1,num2)=> num1+num2
//  console.log(addTwo(8,9)); ===> implicit return


// ***************** immediatly invoked function expression******
// (function one (){
//     console.log("Hello World");
// })();

// (()=>{console.log("Hello World 2");})();





// ( (name) => {
//     document.write(`Hello, ${name}`);
// } )('Mustafa')

// var is global scope


// let balance = 1000

// if(balance>500) console.log("True");



// falsy values==> false,0,-0,0n,'',undefined,null,NaN
// truthy values ==> '0','false', " ", [],{},function(){}

// *************??(nullish Coalescing operator)*********************  undefined, null
// let val1;
// val1 = 15 ?? 10
// val1 = null ?? 20
// console.log(val1);


// terniary Opeartor ?  true, False


// ****************for loop**************************

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

// for (let i = 0; i <= 10; i++) {
//     const m = i;
//     if (m==5) {
//         console.log("5 is worst number");
//     }
//     console.log(m);    

// }




// for (let i = 0; i <=5 ; i++) {
//     console.log(`outer loop value ${i}`);
//     for (let j = 0; j <=3; j++) {
//         // console.log(`inner loop value is: ${j} AND outer loop value is ${i}`);;
//     console.log(i + "*" + j + "= " + i*j);    
//     }
// }



// let myArr = ['batman', 'superman', "flash"]
// for (let i = 0; i < myArr.length; i++) {
//     const element = myArr[i];
//     console.log(element);
// }



// for (let index = 1; index <= 20; index++) {
//     if (index===10) {
//         console.log(`half is done`);
//         break
//     }
//     console.log(index);
// }

// for (let index = 1; index <= 20; index++) {
//     if (index===10) {
//         console.log(`half is done`);
//         continue
//     }
//     console.log(index);
// }



// ******************while and do while loop******************

// let index  = 0 
// while (index<=10) {
//     console.log(`value of index is ${index}`);
// index = index + 2
// }





// let myArr = ["batman", "superman", 'flash']
// let index = 0;
// while (index < myArr.length) {
//     console.log(`value is ${myArr[index]}`)
//     index = index + 1;
// }

// in dowhile loop first work done than condition is checked
// let score = 11;
// do {
//     console.log(`score is ${score}`);
//     score ++
// } while (score <=10);


// *******maps ***********

// const myMap = new Map()
// myMap.set('PK', "PAKISTAN")
// myMap.set('IN', "INDIA")
// myMap.set('USA', "UNITED STATES OF AMERICA")
// // console.log(myMap);
// for (const [key, value] of myMap) {
//     console.log(key,":- ", value)
// }

// maps are NON ITERATABLE


// // ***************array loops**********
// let myArr = [1,2,3,4,5,6]
// for (const num of myArr) {
//     // console.log(num);
// }

// const greetings = "Hello World!"
// for (const greet of greetings) {
//     // console.log(`Each Char is ${greet}`);
// }

// **************for in loop***********

// const myObj = {
//     js: "javascript",
//     rb: "ruby",
//     cpp:"C++",
//     swift: "swift by apple",
// }

// for (const key in myObj) {
//     // console.log(`${key} is shortcut for ${myObj[key]}`);
// }

// let programming = ["js","rb", "c++","pyth"]
// for (const key in programming) {
//     console.log(`${key} is index for ${programming[key]}`);
// }


// **********for each loop***********

// const  coding = ["js","c++","pyth","ruby","java"]
// coding.forEach(function(items){
//     console.log(items);
// })
// coding.forEach((items)=>{
//     console.log(items);
// })
// function preintMe (items){
//     console.log(items);
// }
// coding.forEach(preintMe)

// coding.forEach((items,index,array)=>{
//     console.log(items,index,array);
// })


// const myCoding = [{
// languageName: "Javascript",
// languageFile: "Js"
// },
// {
//     languageName: "python",
//     languageFile:"py"
// },
// {
//         languageName: "ruby",
//     languageFile:"rb"
// }]
// myCoding.forEach( (items)=>{
// console.log(`${items.languageName} is name for language ${items.languageFile}`);

// } )
// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNum = myNums.filter((num)=>(num > 6))
// const newNum = myNums.filter((num)=>{
//     return num > 6})

// const newNums = []
// myNums.forEach((num)=>{
//     if(num > 5){
//         newNums.push(num)
// }});
// console.log(newNums);


// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
// ];

// let userBooks = books.filter((bk)=>bk.genre==="History")
// userBooks=books.filter((bk)=>{return bk.publish >= 1995 && bk.genre==="History"})
// console.log(userBooks);


// const num = [1,2,3,4,5,6,7,8,9,10]
// // let newNum = num.map((nm)=>  nm+10)
// // let newNum = num.map((nm)=>  { return nm+10})

// let newNum = num.map((nm)=>nm*10)
//                 .map((nm)=>nm+5)
//                 .filter((nm)=>nm>40)

// console.log(newNum);


// ********************reduce method ***********

// const myNum = [1,2,3]
// const newNum = myNum.reduce(function (acc,currval) {
//     console.log(`acc:${acc} and currval:${currval}`);
//     return currval+acc
// },5)
// console.log(newNum);

// const shoppingCart = [
//     {
//         itemName: "PY Course",
//         price: 2999
//     },
//     {
//         itemName: "Js Course",
//         price: 3999
//     },
//     {
//         itemName: "Mobile Dev Course",
//         price: 5999
//     }
// ]

// const total = shoppingCart.reduce((acc,item)=>acc + item.price,0)
// console.log(total);


// in "inner text" only the text shows which is visible
// in "text content" all the text is shown even if it is hidden by styling
// in "innerHTML" whole HTML is shown



// const div = document.createElement("div")
// console.log(div);
// div.className = "Main"
// div.id = "Main id"
// div.setAttribute("title", "first title")
// div.style.backgroundColor= "green"
// div.style.padding= "12px"
// div.innerText = "Mustafa"