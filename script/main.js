const icon = document.querySelector('.icon'),
  links = document.querySelector('.links');

// toggle the open class on the links
icon.addEventListener('click', () => {
  links.classList.toggle('open');
});

