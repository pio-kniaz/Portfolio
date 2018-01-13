import $ from 'jquery';
import Swiper from "./modules/Swiper"

// own version carusele
// import ProjectsCarusele from "./modules/ProjectsCarusele"
import RevealOnScroll from "./modules/RevealOnScroll"
import NavigationFunctionality from "./modules/NavigationFunctionality"
import Button from "./modules/Button"
import Preloader from "./modules/Preloader"



// var mobileMenu = new MobileMenu();
// var projectsCarusele = new ProjectsCarusele();
var smoothScroll = new NavigationFunctionality();
new RevealOnScroll($('.reveal-item'), "60%");
new RevealOnScroll($('.skill-icon'), "65%");
new RevealOnScroll($('.about__title'), "69%");
new RevealOnScroll($('.about__text'), "69%");
new RevealOnScroll($('.contact__title'), "60%");


var preloader = new Preloader();
