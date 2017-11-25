import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'
import smoothScroll from "jquery-smooth-scroll"
class NavigationFunctionality {
  constructor() {
    this.pageSections =$('.page-section');
    this.headerLinks =$(".primary-nav a");
    this.createPageSectionWaypoints();
    this.addSmoothScrolling();


  }
  addSmoothScrolling(){
    this.headerLinks.smoothScroll();
  }
  createPageSectionWaypoints(){
    var that=this;
    this.pageSections.each(function() {
      var currentPageSection=this;
      new Waypoint({
        element:currentPageSection,
        handler: function(direction){
          if (direction=="down") {
            var matchingHeaderLink= currentPageSection.getAttribute('data-matching-link');
            that.headerLinks.removeClass('is-current-link')
            $(matchingHeaderLink).addClass('is-current-link');
          }
        },
        offset:"19%"
      });

      new Waypoint({
        element:currentPageSection,
        handler: function(direction){
          if (direction=="up") {
            var matchingHeaderLink= currentPageSection.getAttribute('data-matching-link');
            that.headerLinks.removeClass('is-current-link')
            $(matchingHeaderLink).addClass('is-current-link');
          }
        },
        offset:"-75%"
      })
    })
  }
}
export default NavigationFunctionality;
