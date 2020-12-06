new Glider(document.querySelector('.testimonials'), {
    slidesToShow: 1,
    dots: '.dots',
    draggable: true,
    arrows: {
      prev: '.slider_prev',
      next: '.slider_next'
    }
  });

//   Intersection Observer
const options = {
    threshold: 0.8,
};

const addActiveClass = (entries)=>{
    entries.forEach((entry) => {
        if(entry.isIntersecting && entry.intersectionRatio >= 0.2){
            let currentActive = document.querySelector(".desktop_nav a.active");
            if(currentActive){
                currentActive.classList.remove("active");
            }
            let newActive = document.querySelector(
                `.desktop_nav a[href='#${entry.target.getAttribute("id")}']`
            );
            newActive.classList.add('active');
        }
    });
};
const observer = new IntersectionObserver(addActiveClass,options);
const sections = document.querySelectorAll("section");

sections.forEach((section) => {
    observer.observe(section);
});



// Mobile Navbar

const mobileNav = document.querySelector('.mobile_nav');
const menuIcon = document.querySelector('.menu_icon');
const mobileMenuItems = document.querySelectorAll('.mobile_nav .menu_items li');
menuIcon.addEventListener('click',()=>{
    mobileNav.classList.toggle('active');
})
mobileMenuItems.forEach(i => {
    i.addEventListener('click',()=>{
        mobileNav.classList.remove('active');
    })
})

// Desktop Navbar
