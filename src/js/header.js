// Dark theme

const themeSwitch = document.getElementById('themeSwitch');
const header = document.querySelector('.header');
const shoppingListLink = document.querySelector('.a-shoppinglist');
const shoppingBagDarkMode = document.querySelector('.shopping-bag');
const logoDarkMode = document.querySelector('.header-logo-2');
const burgerDarkMode = document.querySelector('.burger-menu-icon');
const mobileCloseDark = document.querySelector('.mobile-close-icon');

function setThemeFromLocalStorage() {
  const isDarkMode = localStorage.getItem('darkMode') === 'true';

  document.body.classList.toggle('dark-mode', isDarkMode);
  header.classList.toggle('header-dark-mode', isDarkMode);
  shoppingListLink.classList.toggle('dark-mode-header-link', isDarkMode);
  shoppingBagDarkMode.classList.toggle('shopping-bag-dark', isDarkMode);
  logoDarkMode.classList.toggle('logo-dark-mode', isDarkMode);
  burgerDarkMode.classList.toggle('burger-menu-icon-dark', isDarkMode);
  mobileCloseDark.classList.toggle('mobile-close-icon-dark', isDarkMode);

  themeSwitch.checked = isDarkMode;
}

document.addEventListener('DOMContentLoaded', setThemeFromLocalStorage);

themeSwitch.addEventListener('change', () => {
  const isDarkMode = themeSwitch.checked;

  localStorage.setItem('darkMode', isDarkMode);

  document.body.classList.toggle('dark-mode', isDarkMode);
  header.classList.toggle('header-dark-mode', isDarkMode);
  shoppingListLink.classList.toggle('dark-mode-header-link', isDarkMode);
  shoppingBagDarkMode.classList.toggle('shopping-bag-dark', isDarkMode);
  logoDarkMode.classList.toggle('logo-dark-mode', isDarkMode);
  burgerDarkMode.classList.toggle('burger-menu-icon-dark', isDarkMode);
  mobileCloseDark.classList.toggle('mobile-close-icon-dark', isDarkMode);
});

// themeSwitch.addEventListener('change', () => {
//   document.body.classList.toggle('dark-mode', themeSwitch.checked);
//   header.classList.toggle('header-dark-mode', themeSwitch.checked);
//   shoppingListLink.classList.toggle(
//     'dark-mode-header-link',
//     themeSwitch.checked
//   );
//   shoppingBagDarkMode.classList.toggle(
//     'shopping-bag-dark',
//     themeSwitch.checked
//   );

//   logoDarkMode.classList.toggle('logo-dark-mode', themeSwitch.checked);
//   burgerDarkMode.classList.toggle('burger-menu-icon-dark', themeSwitch.checked);
//   mobileCloseDark.classList.toggle(
//     'mobile-close-icon-dark',
//     themeSwitch.checked
//   );
// });

// Mobile menu

const openModalBtn = document.querySelector('.open-menu-btn');
const mobileMenu = document.querySelector('.menu-data-modile');
const closeMenuBtn = document.querySelector('.close-menu-btn');

openModalBtn.onclick = function () {
  mobileMenu.style.display = 'block';
  openModalBtn.style.display = 'none';
  closeMenuBtn.style.display = 'block';
  document.body.style.overflow = 'hidden';
};
closeMenuBtn.onclick = function () {
  mobileMenu.style.display = 'none';
  openModalBtn.style.display = 'block';
  closeMenuBtn.style.display = 'none';
  document.body.style.overflow = 'auto';
};

// Button > 768  fix
function checkWidth() {
  var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  if (viewportWidth >= 768) {
    document.querySelector('.open-menu-btn').style.display = 'none';
  } else {
    document.querySelector('.open-menu-btn').style.display = 'block';
  }
}

window.onload = checkWidth;
window.onresize = checkWidth;
