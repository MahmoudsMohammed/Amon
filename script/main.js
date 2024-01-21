const icon = document.querySelector('.icon'),
  links = document.querySelector('.links'),
  control = document.querySelector('.control'),
  video = document.querySelector('.discount-video'),
  nav = document.querySelector('nav'),
  loader = document.querySelector('.loader'),
  main = document.getElementById('main');

// display the loader
document.addEventListener('DOMContentLoaded', () => {
  main.style.display = 'none';
  setTimeout(() => {
    loader.style.display = 'none';
    main.style.display = 'block';
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

    const mySwiper = new Swiper('.slider-three', {
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

    // Scroll Reveal
    const scroll = ScrollReveal({
      distance: '100px',
      duration: 2500,
      reset: true,
    });

    scroll.reveal(`.landing .content p , .landing .content button`, {
      origin: 'top',
      interval: 100,
    });

    scroll.reveal(
      `.about .content h3 , .about .content p , .about .content button`,
      {
        origin: 'left',
        interval: 150,
      }
    );

    scroll.reveal(
      `.about .slider-two , .contact .container , .more .image , .news .form`,
      {
        origin: 'right',
      }
    );

    scroll.reveal(`.service .image,.contact .content`, {
      origin: 'top',
    });

    scroll.reveal(`.service .content , .trip .container`, {
      origin: 'bottom',
    });

    scroll.reveal(`.trip .content , .more .content , .news .content`, {
      origin: 'left',
    });
  }, 4000);
});

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
