const hamburger = document.querySelector('.burger');
const navBody = document.querySelector('.nav-container');
const navLink = document.querySelectorAll('.nav-link');
const bodyTag = document.body;

function toggleMenu() {
  hamburger.classList.toggle('open');
  navBody.classList.toggle('open');
  bodyTag.classList.toggle('lock');
  navLink.forEach((el) => el.classList.toggle('open'));
}
hamburger.addEventListener('click', toggleMenu);

function removeMenu(event) {
  if (event.target.classList.contains('nav-link')) {
    bodyTag.classList.remove('lock');
    hamburger.classList.remove('open');
    navBody.classList.remove('open');
    navLink.forEach((el) => el.classList.remove('open'));
  }  
}
navBody.addEventListener('click', removeMenu);