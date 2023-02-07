/* в этот файл добавляет скрипты*/
const burgerButton = document.querySelector('.user-nav__burger-button');
const mainNav = document.querySelector('.main-nav');

burgerButton.addEventListener('click', function () {
  if (mainNav.classList.contains('main-nav--close')) {
    mainNav.classList.remove('main-nav--close');
    mainNav.classList.add('main-nav--open');
  } else {
    mainNav.classList.add('main-nav--close');
    mainNav.classList.remove('main-nav--open');
  }
});

burgerButton.addEventListener('click', function () {
  if (burgerButton.classList.contains('user-nav__burger-button--open')) {
    burgerButton.classList.remove('user-nav__burger-button--open');
    burgerButton.classList.add('user-nav__burger-button--close');
  } else {
    burgerButton.classList.remove('user-nav__burger-button--close');
    burgerButton.classList.add('user-nav__burger-button--open');
  }
});