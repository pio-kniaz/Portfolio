import $ from 'jquery';
import MobileMenu from "./modules/MobileMenu"
import ProjectsCarusele from "./modules/ProjectsCarusele"
import RevealOnScroll from "./modules/RevealOnScroll"


var mobileMenu = new MobileMenu();
var projectsCarusele = new ProjectsCarusele();
new RevealOnScroll($('.reveal-item'),"60%");
new RevealOnScroll($('.skill-icon'),"65%");
