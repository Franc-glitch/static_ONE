let currentSlide = 0;
const totalSlides = 4;

const nextBtn = document.getElementById('nextBtn') as HTMLButtonElement;
const prevBtn = document.getElementById('prevBtn') as HTMLButtonElement;
const slider = document.querySelector('.slider') as HTMLDivElement;

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  slider.style.transform = `translateX(-${currentSlide * 100}vw)`;
});

prevBtn.addEventListener('click', () => {
  console.log('Prev button clicked');
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  slider.style.transform = `translateX(-${currentSlide * 100}vw)`;
});
