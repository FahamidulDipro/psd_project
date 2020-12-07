// Glider

new Glider(document.querySelector('.slider_container'), {
    slidesToShow: 1,
    dots: '.dots',
    draggable: true,
    arrows: {
      prev: '.switch_prev',  
      next: '.switch'
    }
  });

  $(document).ready(function() {
    $(".dropdown-toggle").dropdown();
});