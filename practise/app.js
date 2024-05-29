// var rightNow = new Date();
// document.write(rightNow)


//  var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//  var now = new Date();
//  var theDay = now.getDay();
//  var nameOfToday = dayNames[theDay];
//  console.log(nameOfToday);


//  var d = new Date();
//  var currentMonth = d.getMonth();
// var Month = d.getMonth();
// console.log(Month);

// var today = new Date ()
// var doomsday = new Date("June 30, 2050");
// var msDoomsday = doomsday.getTime();
//  var msToday = today.getTime();
//  var msDoomsday = doomsday.getTime();
//  var msDiff = msDoomsday - msToday;
//  var dDiff = msDiff / (1000 * 60 * 60 * 24);
//  var round = Math.floor(dDiff) 
 
//  console.log(dDiff);
//  console.log(round);




//  var d = new Date();
//  d.setFullYear(2001);
//  console.log(d);


//  var now = new Date();
//  var theHr = now.getHours();
//  var theMin = now.getMinutes();
//  alert("time: " + theHr + ":" + theMin);

//  function tellTime() {
// var now = new Date();
// var theHr = now.getHours();
// var theMin = now.getMinutes();
// console.log("Current time: "+ theHr + ":" + theMin);
// }
// tellTime()
// function greetUser(){}
// greetUser(console.log("Hello, there."));

// function hhh (parameter){
//     console.log(parameter)
// }
// hhh("Hello W")


// function birth(m,d,y){
//     console.log(m +" " +d + " " +  y)
// }
// var month = "september"
// var date = 13
// var year = 2007
// birth(month,date,year);


//  function calcTot(merchTot) {
//     var orderTot;
//     if (merchTot >= 100) {
//     orderTot = merchTot;
//     }
//     else if (merchTot < 50.01) {
//     orderTot = merchTot + 5;
//     }
//     else {
//      orderTot = merchTot + 5 + (.03 * (merchTot - 50));
//      }
//      return orderTot;
//      }
//      var totalToCharge = calcTot();
//      alert(merchTot(25));

var dayOfWk = prompt("")
//  if (dayOfWk ==="Sat" || dayOfWk === "Sun") {
//     alert("Whoopee!");
//     }
//     else if (dayOfWk === "Fri") {
//     alert("TGIF!");
//     }
//     else {
//     alert("Shoot me now!");
//      }
    



switch(dayOfWk) {
case "Sat" :
alert("Whoopee");
break;
case "Sun" :
alert("Whoopee");
break;
case "Fri" :
alert("TGIF!");
 break;
 default :
 alert("Shoot me now!");
   }