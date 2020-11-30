// Slider

$(function(){
    $('.bxslider').bxSlider({
      mode: 'fade',
      captions: true,
    
      shrinkItems:true,
      responsive:true
    });
  });


//   Responsive Navbar MeanMenu

$(document).ready(function () {
	$('#navbar').meanmenu({
        meanMenuContainer: '#nav_section',
        meanScreenWidth:1024,
    });
});