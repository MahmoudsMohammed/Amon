const icon = document.querySelector('.icon'),
  links = document.querySelector('.links'),
  control = document.querySelector('.control'),
  video = document.querySelector('.discount-video'),
  nav = document.querySelector('nav');

// toggle the open class on the links
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('icon')) {
    links.classList.toggle('open');
  } else {
    links.classList.remove('open');
  }
});

// control the video using the
control.addEventListener('click', (e) => {
  if (video.paused) {
    video.play();
    control.innerHTML = '<i class="fa-solid fa-pause"></i>';
  } else {
    video.pause();
    control.innerHTML = '<i class="fa-solid fa-play"></i>';
  }
});

// make nav fixed when scroll
document.addEventListener('scroll', () => {
  if (window.scrollY > nav.getBoundingClientRect().height) {
    nav.classList.add('fix');
  } else {
    nav.classList.remove('fix');
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

var mySwiper = new Swiper('.slider-three', {
  autoHeight: true,
  effect: 'coverflow',
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 40,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-three-next',
    prevEl: '.swiper-three-prev',
  },
  pagination: {
    el: '.custom-pagination',
  },
});
