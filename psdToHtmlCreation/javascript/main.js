
// Navbar Section
const navbarBtn = document.querySelector('.navbar_btn');
const navbarLinks = document.querySelector('.navbar_links');

navbarBtn.addEventListener('click',function(){
    let value = navbarLinks.classList.contains('navbar_collapse');
    if(value){
        navbarLinks.classList.remove('navbar_collapse');
        navbarBtn.classList.remove('change_btn');
    }
    else{
        navbarLinks.classList.add('navbar_collapse');
        navbarBtn.classList.add('change_btn');
    }
})

// Slider Section
$(document).ready(function(){
    $('.slider-area').bxSlider({
       
        captions: true,
      

    });
  
  });
