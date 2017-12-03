const menu = document.querySelector('#primary-nav');
const primaryMenu = document.querySelector('#primary-nav__ul');
const showHideButton = document.createElement('button');
var element = document.createElement('div');

element.classList.add('header__hamburger-button--middle')
showHideButton.setAttribute('type', 'button');
showHideButton.setAttribute('aria-controls', 'primary-nav');
showHideButton.classList.add('header__hamburger-button');
menu.parentNode.insertBefore(showHideButton, menu);
showHideButton.appendChild(element);



function showMenu() {
  // showHideButton.innerHTML = 'Zamknij menu';
      showHideButton.setAttribute('aria-label', 'Close menu');

  showHideButton.setAttribute('aria-expanded', 'true');
    primaryMenu.classList.add('primary-nav__ul');
  primaryMenu.classList.remove('primary-nav__ul--hidden');
  showHideButton.classList.add("header__hamburger-button--close-x");
}

function hideMenu() {
  showHideButton.setAttribute('aria-expanded', 'false');
    showHideButton.setAttribute('aria-label', 'Open menu');
  // showHideButton.innerHTML = 'Otwórz menu';

  primaryMenu.classList.add('primary-nav__ul--hidden');
  showHideButton.classList.remove("header__hamburger-button--close-x");
}

showHideButton.addEventListener('click', function() {
  if (primaryMenu.classList.contains('primary-nav__ul--hidden')) {
    showMenu();
  } else {
    hideMenu();
  }
}, hideMenu());
