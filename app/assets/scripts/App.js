import $ from 'jquery';
import MobileMenu from "./modules/MobileMenu"
import ProjectsCarusele from "./modules/ProjectsCarusele"
import RevealOnScroll from "./modules/RevealOnScroll"
import NavigationFunctionality from "./modules/NavigationFunctionality"


var mobileMenu = new MobileMenu();
var projectsCarusele = new ProjectsCarusele();
var smoothScroll = new NavigationFunctionality();
new RevealOnScroll($('.reveal-item'),"60%");
new RevealOnScroll($('.skill-icon'),"65%");
