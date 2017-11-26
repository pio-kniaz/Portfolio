import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'
import smoothScroll from "jquery-smooth-scroll"
class NavigationFunctionality {
  constructor() {
    this.lazyImages=$('.lazyload')
    this.pageSections =$('.page-section');
    this.headerLinks =$(".primary-nav a");
    this.createPageSectionWaypoints();
    this.addSmoothScrolling();
    this.refreshWaypoints();


  }
  refreshWaypoints(){
    this.lazyImages.on('load',function(){
      Waypoint.refreshAll();
    })
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
        offset:"18%"
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
        offset:"-50%"
      })
    })
  }
}
export default NavigationFunctionality;
