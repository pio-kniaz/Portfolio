import $ from "jquery";
class MobileMenu {
  constructor() {
    this.hamburger = $('.header__hamburger-button')
    this.menuContent = $('.primary-nav__ul');
    this.events();
  }
  events() {
    this.hamburger.click(this.toggleTheMenu.bind(this))
  }
  toggleTheMenu() {
    this.menuContent.toggleClass('primary-nav__ul--active')
    this.hamburger.toggleClass('header__hamburger-button--close-x')
  }
}

export default MobileMenu;
