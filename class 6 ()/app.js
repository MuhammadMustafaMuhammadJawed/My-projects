// var tablenum = +prompt('enter table number')
// var tableLen  = +prompt('enter table length')
// console.log(tablenum)
// console.log(tableLen)

// for(i=1; i<=tableLen; i++){

// document.write(tablenum+" x"+ i +'=' + tablenum*i + "<br/>" )

// }



// i = 30
// for (i ; i>=1; i-- ){
//     console.log(i)
// }



// for(i=1  ;  i<=30  ;  i++ ){
// if(i % 2 == 0 ){

//     console.log(i,"even")
// }else if(i % 2 !== 0 ){

//     console.log(i,"odd")
// } else{console.log(undefined)}
// }


// var arr = ['karachi', 'lahore', "islamabad", 'peshawar','london']

// for(i= 0 ; i<arr.length ; i++){
//     console.log(arr[i])
// }

var citycollection = ['karachi','lahore','multan']
var usercity = prompt('enter your city!').toLowerCase()                                                                            

for(var i = 0 ; i<citycollection.length;i++){
    if(citycollection[i]===usercity){
        console.log('welcome')
        break 
    }
}




