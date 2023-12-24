const nextBtn        = document.querySelector('.next-btn');
const prevBtn        = document.querySelector('.prev-btn');
const slides         = document.querySelectorAll('.slide');
const numberOfSlides = slides.length;
let   slideNumber    = 0;
let   autoPlay       = false;

function slidesRight() {
  slides.forEach(slide => {
    slide.classList.remove('active');
  });

  slideNumber++;

  if (slideNumber > (numberOfSlides - 1)) slideNumber = 0;
  slides[slideNumber].classList.add('active');

}

function slidesLeft() {
  slides.forEach(slide => {
    slide.classList.remove('active');
  });

  slideNumber--;

  if (slideNumber < 0) slideNumber = numberOfSlides - 1;
  slides[slideNumber].classList.add('active');
}

nextBtn.addEventListener('click', slidesRight);
prevBtn.addEventListener('click', slidesLeft);

// key events
function handleKeyDown(e) {
  if (e.key == 'ArrowLeft') slidesLeft();
  else if (e.key == 'ArrowRight') slidesRight();
}

window.addEventListener('keydown', handleKeyDown, false);

// autoplay
if (typeof autoPlay !== 'undefined' && autoPlay) {
  const autoPlayTime = 3;
  setInterval(slidesRight, autoPlayTime * 1000)
}