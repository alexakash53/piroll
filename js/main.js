$(document).ready(function(){

     // page loader js

     setTimeout(function () {
        $('.loader_bg').fadeToggle();
    }, 1500);

    // meanmenu active

	$("#mobile-menu").meanmenu({
		meanMenuContainer:'.mobile-menu',
		meanScreenWidth:'767'
    });
    
// slider-active

$('.slider-active').owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// testimonial-active

$('.testimonial-active').owlCarousel({
    loop:true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// brand-active

$('.brand-active').owlCarousel({
    loop:true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        590:{
            items:2
        },
        770:{
            items:4
        }
    }
})

// wow-active

new WOW().init();

// counterUp active

$('.count').counterUp({
    delay: 20,
    time: 3000
});

// magnific-image-Popup active

$('.image-popup').magnificPopup({
    type: 'image',
    gallery:{
        enabled:true
  }
});

// magnific-video-Popup active

$('.video-popup').magnificPopup({
    type: 'iframe'
});



    

// isotop
    $('portfolio-filter').on('click','button',function(){
        var filterValue = $ (this).attr('data-filter');
        grid.isotope({filter : filterValue});
    })




});