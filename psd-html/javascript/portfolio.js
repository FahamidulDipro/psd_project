// Mixitup (Portfolio Section)
$(document).ready(function(){
    var mixer = mixitup('.container');
})

// Sticky Menu
// $("#navbar").sticky({topSpacing:0});

// $('.js--services-section').waypoint(function(direction){
//     if(direction == 'down'){
//         $('nav').addClass('sticky');
//     }
//     else{
//         $('nav').removeClass('sticky');
//     }
// })

// MeanMenu responsive navbar
$(document).ready(function () {
	$('#navbar').meanmenu({
        meanMenuContainer: '#home',
        meanScreenWidth:1024,
    });
});