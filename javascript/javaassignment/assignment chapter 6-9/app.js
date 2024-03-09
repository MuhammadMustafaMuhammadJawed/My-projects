//1
// var stat1 = 'value of a is: '
// var val1 = 10 
// document.write(stat1+val1)
// var stat2 = 'value of ++a is: '
// var val2 = ++val1 
// document.write(stat2+val2)
// var stat3 = 'now value of a is: '
// var val3 = 11 
// document.write(stat3+val3)
// var stat4 = 'value of a++ is: '
//  var val4 = 11 
//  document.write(stat4+val4)
//  var stat5 = 'now value of a is: '
//  var val5 = ++val4 
//  document.write(stat5+val5)

// var stat6 = 'value of --a is: '
//  var val6 =  --val5
//  document.write(stat6+val6)
//  var stat7 = 'now value of a is: '
//  var val7 = 11
//  document.write(stat7+val7)

// var stat8 = 'value of a-- is: '
//  var val8 = 11
//  document.write(stat8+val8)
//  var stat9 = 'now value of a is: '
//  var val9 = val8-1 
//  document.write(stat9+val9)

//2
// var a = 2, b = 1; 
// var result = --a - --b + ++b + b--; 
// var result = --a;  
// var result = --a - --b; 
// var result = --a - --b + ++b; 
// var result = --a - --b + ++b + b--; 
// document.write(result)

// 3
// var pr =prompt()
// alert("Hi "+ pr)

// //5
//  var pr =prompt()
//  var operation0 = pr*1
//  document.write(operation0+" ") 
//  var operation = pr*2
//  document.write(operation+" ") 
//  var operation3 = pr*3
//  document.write(operation3+" ")
//  var operation4 = pr*4
//  document.write(operation4+" ")
//  var operation5 = pr*5
//  document.write(operation5+" ")
//  var operation6 = pr*6
//  document.write(operation6+" ")
//  var operation7 = pr*7
//  document.write(operation7+" ")
//  var operation8 = pr*8
//  document.write(operation8+" ")
//  var operation9 = pr*9
//  document.write(operation9+" ")
//  var operation10 = pr*10
//  document.write(operation10 +" ")

//6
//  // Prompt the user to input three subject names
//  var subject1 = prompt("Enter the name of subject 1:");
//  var subject2 = prompt("Enter the name of subject 2:");
//  var subject3 = prompt("Enter the name of subject 3:");

//  // Total marks for each subject
//  var totalMarks = 100;

//  // Prompt the user to input obtained marks for each subject
//  var obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
//  var obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
//  var obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

//  // Calculate total obtained marks
//  var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;

//  // Calculate percentage
//  var percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;

//  // Display the result in a table
//  document.write("<table border='1'>");
//  document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
//  document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
//  document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
//  document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
//  document.write("<tr><td colspan='2'>Total Obtained Marks</td><td>" + totalObtainedMarks + "</td></tr>");
//  document.write("<tr><td colspan='2'>Percentage</td><td>" + percentage.toFixed(2) + "%</td></tr>");
//  document.write("</table>");