const slides = Array.from(document.querySelectorAll(".hero__img"));
let index = 0;

function showSlide(nextIndex) {
  slides[index].classList.remove("is-active");
  index = nextIndex;
  slides[index].classList.add("is-active");
}

setInterval(() => {
  const nextIndex = (index + 1) % slides.length;
  showSlide(nextIndex);
}, 4200);
