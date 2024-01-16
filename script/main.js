const icon = document.querySelector('.icon'),
  links = document.querySelector('.links');

// toggle the open class on the links
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('icon')) {
    links.classList.toggle('open');
  } else {
    links.classList.remove('open');
  }
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

const slider2 = new Swiper('.slider-two', {
  autoHeight: true,
  navigation: {
    nextEl: '.swiper-two-next',
    prevEl: '.swiper-two-prev',
  },
});
