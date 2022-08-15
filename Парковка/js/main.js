$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        center: true,
        dots: true,        
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })
  $(".panel").click(function(){
    $(".panel").removeClass("active-tab");
    $(this).toggleClass("active-tab");
})
$(".navbar-default .navbar-nav>li>a").click(function(){
$(".navbar-collapse").removeClass("in");
})
})
