// var greet = 'Hello, world....'; // assingment opertor
// console.log(greet);

// var test;
// test = 'Don"t';
// console.log(test);

// var num1 = 100;

// var num = num1 + 10 + '5'; // 205 // 1105
// console.log(num);

// var expression = (1 + 3) * num1 + 9 * 5;
// console.log(expression);

// var str = '10' * '10N';
// console.log(str);

// var mod = 50 % 2;
// console.log(mod);

// var inc = 51;
// inc = inc + 10;
// inc += 1;
// inc++;
// inc--;
// inc -= 1;
// inc = inc - 10;
// console.log(inc);
// console.log('=====================');
// // 51
// var test = inc++; // 51
// console.log(inc++, 'inc'); // 52
// console.log(++inc, 'inc 2'); // 54
// console.log(test, 'test'); // 51
// // console.log(inc);

// // var prmpt = +prompt('Enter a value');
// // console.log(prmpt);

// var drink = 'asda';

// if (drink === 'cola') {
//   console.log('le ao');
// } else if (drink === 'pakola') {
//   console.log('khair hai');
// } else if (drink === 'rani') {
//   console.log('behtreen!');
// } else {
//   console.log('rehne de bhai!');
// }

var empty = document.getElementsByClassName('empty');

Array.from(empty).forEach(function (elem) {
  elem.innerHTML += '<i>Hello, world</i>';
});

console.log(empty[0].innerText);

var btn = document.getElementsByTagName('button');
var counter = 0;
btn[0].addEventListener('click', function () {
  var img = document.querySelector('img');
  if (counter % 2 === 0) {
    img.src = 'images.png';
  } else {
    img.src = 'images.jpeg';
  }
  counter++;
  // console.log(img.src);
  // if (img.src === 'http://127.0.0.1:5500/images.png') {
  //   img.src = 'images.jpeg';
  // } else {
  //   img.src = 'images.png';
  // }
});

// for (var i = 0; i < empty.length; i++) {
// }
// empty[1].innerHTML = "<i>Hello, world</i>"
// empty[2].innerHTML = "<i>Hello, world</i>"
// empty[2].innerHTML = "<i>Hello, world</i>"

var p = document.querySelector('#para');
// setTimeout(() => {
//   // p.className += ' none';
//   p.classList.add('none');
//   console.log(p.classList);
// }, 0);
// console.log('hello,==============');
// setTimeout(() => {
//   // p.className += ' none';
//   p.classList.remove('none');
//   console.log(p.classList);
// }, 2000);

var toggle = document.querySelector('#toggle');
toggle.addEventListener('click', function (ev) {
  if (toggle.classList.contains('hide')) {
    toggle.classList.replace('hide', 'show');
    toggle.innerText = 'Hide';
  } else {
    toggle.classList.replace('show', 'hide');
    toggle.innerText = 'Show';
  }
});
var div = document.querySelector('div');
div.addEventListener('mouseover', function () {
  div.style.width = '800px';
});
div.addEventListener('mouseleave', function () {
  div.style.width = '500px';
});

console.log(document.querySelectorAll(".empty"))
// document.querySelectorAll('.empty').forEach((e) => console.log(e));
