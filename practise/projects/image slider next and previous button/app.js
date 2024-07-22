let images = ['./images/car 1.png', './images/car 2.png', './images/car 3.png', './images/car 4.png'];
let currentImageIndex = 0;
let prevBtn = document.getElementById("prevBtn")

function nextImage() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    document.getElementById('sliderImage').src = images[currentImageIndex];
}

prevBtn.addEventListener("click", function () {
        currentImageIndex--;
    console.log(currentImageIndex + "=====");
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - "1";
    }
    document.getElementById('sliderImage').src = images[currentImageIndex];
})


