
var swiper = new Swiper('.swiper-container', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 40,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
       el: '.swiper-pagination',
       clickable: true,
     },
  // Responsive breakpoints
  breakpoints: {
    // when window width is <= 320px
    530: {
      slidesPerView:1,
      spaceBetween: 0,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    },
    // when window width is <= 640px
    800: {
      slidesPerView: 2,
      spaceBetween:0,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    }
  }
})
