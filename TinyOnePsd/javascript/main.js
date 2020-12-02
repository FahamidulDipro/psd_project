//   Responsive Navbar MeanMenu

// $(document).ready(function () {
// 	$('#navbar').meanmenu({
//         meanMenuContainer: '.row',
//         meanScreenWidth:2200,
//     });
// });


// Card Container Hover

const cardSelect1 = document.querySelector('#my_img1');
const cardSelect2 = document.querySelector('#my_img2');
const cardSelect3 = document.querySelector('#my_img3');
const cardSelect4 = document.querySelector('#my_img4');
const cardSelect5 = document.querySelector('#my_img5');
const cardSelect6 = document.querySelector('#my_img6');
const cardSelect7 = document.querySelector('#my_img7');
const cardSelect8 = document.querySelector('#my_img8');

cardSelect1.addEventListener('mouseover', () => {
    document.querySelector('#my_img1').src = '../images/blackscreen.jpg';

})
cardSelect1.addEventListener('mouseout', () => {
    document.querySelector('#my_img1').src = '../images/mobile.jpg'
})

cardSelect2.addEventListener('mouseover', () => {
    document.querySelector('#my_img2').src = '../images/blackscreen.jpg';

})
cardSelect2.addEventListener('mouseout', () => {
    document.querySelector('#my_img2').src = '../images/fontawsome_icon.jpg'
})

cardSelect3.addEventListener('mouseover', () => {
    document.querySelector('#my_img3').src = '../images/blackscreen.jpg';

})
cardSelect3.addEventListener('mouseout', () => {
    document.querySelector('#my_img3').src = '../images/laptop.jpg'
})

cardSelect4.addEventListener('mouseover', () => {
    document.querySelector('#my_img4').src = '../images/blackscreen.jpg';

})
cardSelect4.addEventListener('mouseout', () => {
    document.querySelector('#my_img4').src = '../images/mobile.jpg'
})


cardSelect5.addEventListener('mouseover', () => {
    document.querySelector('#my_img5').src = '../images/blackscreen.jpg';

})
cardSelect5.addEventListener('mouseout', () => {
    document.querySelector('#my_img5').src = '../images/mockup.jpg'
})


cardSelect6.addEventListener('mouseover', () => {
    document.querySelector('#my_img6').src = '../images/blackscreen.jpg';

})
cardSelect6.addEventListener('mouseout', () => {
    document.querySelector('#my_img6').src = '../images/blacktab.jpg'
})


cardSelect7.addEventListener('mouseover', () => {
    document.querySelector('#my_img7').src = '../images/blackscreen.jpg';

})
cardSelect7.addEventListener('mouseout', () => {
    document.querySelector('#my_img7').src = '../images/devices.jpg'
})


cardSelect8.addEventListener('mouseover', () => {
    document.querySelector('#my_img8').src = '../images/blackscreen.jpg';

})
cardSelect8.addEventListener('mouseout', () => {
    document.querySelector('#my_img8').src = '../images/devices2.jpg'
})



// Navbar Section
const navbarBtn = document.querySelector('.navbar_btn');
const navbarLinks = document.querySelector('.navbar_links');

navbarBtn.addEventListener('click', function () {
    let value = navbarLinks.classList.contains('navbar_collapse');
    if (value) {
        navbarLinks.classList.remove('navbar_collapse');
        navbarBtn.classList.remove('change_btn');
        document.querySelector('.bar1').style.background = 'black';
        document.querySelector('.bar2').style.background = 'black';
        document.querySelector('.bar3').style.background = 'black';
    }
    else {
        navbarLinks.classList.add('navbar_collapse');
        navbarBtn.classList.add('change_btn');
        // document.querySelector('.bar1 .bar2 .bar3').style.background = 'white';
        document.querySelector('.bar1').style.background = 'white';
        document.querySelector('.bar2').style.background = 'white';
        document.querySelector('.bar3').style.background = 'white';
    }
})

//Nav Link Click
const singleLink = document.querySelectorAll('.navbar_single-link ');

singleLink.forEach((el)=>{
    el.addEventListener('click',()=>{
        let value = navbarLinks.classList.contains('navbar_collapse');
        if (value) {
        navbarLinks.classList.remove('navbar_collapse');
        navbarBtn.classList.remove('change_btn');
        document.querySelector('.bar1').style.background = 'black';
        document.querySelector('.bar2').style.background = 'black';
        document.querySelector('.bar3').style.background = 'black';
    }
    else {
        navbarBtn.classList.add('change_btn');
        document.querySelector('.bar1').style.background = 'white';
        document.querySelector('.bar2').style.background = 'white';
        document.querySelector('.bar3').style.background = 'white';
    }
    })
})
