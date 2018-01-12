import $ from 'jquery';
class Preloader {
  constructor() {
    this.window = $(document);
    this.preloader = $('.preload');
    this.events();
  }
  events() {
    this.window.ready(this.hidePreloader.bind(this))
  }
  hidePreloader() {
    var that = this;
    setTimeout(function() {
      // console.log(this);
      // console.log(that);
      that.preloader.removeClass('show-preloader')
    }, 2400);
  }
}

export default Preloader;
