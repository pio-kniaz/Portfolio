import $ from "jquery"
class ProjectsCarusele {
  constructor() {
    this.next=$('.projects__right-arrow');
    this.prev=$('.projects__left-arrow');
    this.current=$('.projects--active');
    this.events();
  }

  events(){
    this.next.click(this.nextProject.bind(this))
    this.prev.click(this.prevProjects.bind(this))
  }
  nextProject(){
    var nextContent = this.current.next();
    var prevContent=this.current.prev()
    if(nextContent.length){
      this.current.removeClass('projects--active');
      nextContent.addClass('projects--active');
      this.current= nextContent;
    }
  }
  prevProjects(){
    var prevContent=this.current.prev()
    var nextContent = this.current.next();
    if (prevContent.length) {
      this.current.removeClass('projects--active');
      prevContent.addClass('projects--active');
      this.current=prevContent;
      

    }

  }
}
export default ProjectsCarusele;
