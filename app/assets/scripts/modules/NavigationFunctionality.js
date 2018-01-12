import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'
import smoothScroll from "jquery-smooth-scroll"
class NavigationFunctionality {
  constructor() {
    this.headerLinks = $(".primary-nav a");
    this.addSmoothScrolling();
  }
  addSmoothScrolling() {
    this.headerLinks.smoothScroll();
  }
}
export default NavigationFunctionality;
