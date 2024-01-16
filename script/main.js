const icon = document.querySelector('.icon'),
  links = document.querySelector('.links');

// toggle the open class on the links
icon.addEventListener('click', () => {
  links.classList.toggle('open');
});

// Handle The Sliders
const slider1 = new Swiper('.slider-one', {
  speed: 1500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: '.swiper-one-next',
    prevEl: '.swiper-one-prev',
  },
});
