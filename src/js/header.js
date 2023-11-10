const themeSwitch = document.getElementById('themeSwitch');
const header = document.querySelector('.header');
const shoppingListLink = document.querySelector('.a-shoppinglist');
// const sideMenuSwitch = document.querySelector('.allCategoriesBox');
const shoppingBagDarkMode = document.querySelector('.shopping-bag');
const logoDarkMode = document.querySelector('.header-logo-2');

themeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode', themeSwitch.checked);
  header.classList.toggle('header-dark-mode', themeSwitch.checked);
  shoppingListLink.classList.toggle(
    'dark-mode-header-link',
    themeSwitch.checked
  );
  shoppingBagDarkMode.classList.toggle(
    'shopping-bag-dark',
    themeSwitch.checked
  );
  // sideMenuSwitch.classList.toggle('side-menu-dark-mode', themeSwitch.checked);
  logoDarkMode.classList.toggle('logo-dark-mode', themeSwitch.checked);
});
