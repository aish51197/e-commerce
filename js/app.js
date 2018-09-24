$(document).ready(function(){
  $('.owl-carousel.fashion').owlCarousel({
    loop:false,
    margin:10,
    items: 6,
    nav: true,
    responsiveClass: true,
    responsive: {
        100:{
            items: 1
        },
        300:{
            items: 2
        },
        500:{
            items:3
        },
        800:{
            items: 6
        },
        1000: {
            items: 8
        }
    },
    dots: false,
    navText: ['<i class="fas fa-backward"></i>','<i class="fas fa-forward"></i>']
});
  $('.owl-carousel.electronics').owlCarousel({
    loop:false,
    margin:20,
    items: 6,
    nav: true,
    responsiveClass: true,
    responsive: {
        100:{
            items: 2
        },
        300:{
            items: 4
        },
        500:{
            items:8
        },
        800:{
            items: 10
        },
    },
    dots: false,
    navText: ['<i class="fas fa-backward"></i>','<i class="fas fa-forward"></i>']
});
});