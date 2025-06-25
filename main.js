var currentSlide = 0;
var totalSlides = 4;
var slider = document.querySelector('.slider');
var nextBtn = document.getElementById('nextBtn');
nextBtn.addEventListener('click', function () {
    currentSlide = (currentSlide + 1) % totalSlides;
    slider.style.transform = "translateX(-".concat(currentSlide * 100, "vw)");
});
