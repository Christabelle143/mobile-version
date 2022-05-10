const logo = document.querySelector('.logo');
const menu = document.querySelector('.menu3');
const hamburger = document.querySelector('#openmenu');
const closeHamburger = document.querySelector('#closemenu');
const links = document.querySelector('.nav_items');
const navLinks = document.querySelectorAll('.nav_items li');
const lis = Array.from(navLinks);

function toggler() {
  logo.classList.toggle('hide');
  hamburger.classList.toggle('remove');
  document.body.classList.toggle('no-scroll');
}

menu.addEventListener('click', () => {
  toggler();
  links.classList.toggle('hide');
  closeHamburger.classList.toggle('remove');
});
for (let i = 0; i < lis.length; i += 1) {
  lis[i].addEventListener('click', () => {
    toggler();
    links.classList.add('hide');
    closeHamburger.classList.add('remove');
  });
}
