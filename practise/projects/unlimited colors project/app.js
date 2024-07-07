const randomColor = function () {
    const hex = '0123456789ABCDEF'
    let color = '#';

    for (i = 0; i < 6; i++) {

        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}
// console.log(randomColor())
let intervalId;
function changecolor() {
    document.body.style.backgroundColor = randomColor();
}
function colorChange() {
    intervalId = setInterval(changecolor, 1000)
}
function stopColor() {
    clearInterval(intervalId);
}
document.getElementById('start').addEventListener('click', colorChange)
document.getElementById('stop').addEventListener('click', stopColor)

