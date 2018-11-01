const button = document.getElementById("button");
const body = document.getElementById("body");
const menu = document.getElementById("menu");
const header = document.getElementById("header");

const buttonClass = 'main-nav__toggle--opened';
const bodyClass = 'body--opened';
const menuClass = 'main-nav__hidden--opened';
const headerClass = 'page-header--opened';

button.addEventListener("click", function() {
  button.classList.toggle(buttonClass);
  body.classList.toggle(bodyClass);
  menu.classList.toggle(menuClass);
  header.classList.toggle(headerClass);
});

document.body.classList.remove('body--no-javascript');