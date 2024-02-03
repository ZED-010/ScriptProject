(function ($) {
    "use strict";
    $(document).on('ready', function () {

      
        $('.post-slider').owlCarousel({
            loop: true,
            margin: 30,
            responsiveClass: true,
            nav: true,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 1000,
            navText: ['<img src="/other/images/left.png" class="sl-tm">', '<img src="/other/images/right.png" class="sl-tm">'],
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    margin: 0,
                },
                768: {
                    margin: 0,
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
     
        $('.testimonials1').owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            nav: false,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 1000,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right" ></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2
                },
                1170: {
                    items: 2
                }
            }
        });


     
        $('.features').owlCarousel({
            loop: true,
            margin: 30,
            responsiveClass: true,
            nav: false,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 1000,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right" ></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2
                },
                1170: {
                    items: 3
                }
            }
        });

       
        $('.clients').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 1000,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right" ></i>'],
            responsive: {
                0: {
                    items: 3,
                },
                768: {
                    items: 3
                },
                1170: {
                    items: 3
                }
            }
        });


      
        $('.related-post').owlCarousel({
            loop: true,
            margin: 30,
            responsiveClass: true,
            nav: false,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 1000,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right" ></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2
                },
                1170: {
                    items: 2
                }
            }
        });


     
        $('.count').counterUp({
            delay: 10,
            time: 3000
        });

        $('.video-popup').magnificPopup({
            type: 'iframe',
        });

        
        $('.primary-menu ul').slicknav();
        $('.slicknav_menu').prepend('<a href="index.html"><img src="../images/logo.svg" alt=""></a>');

     
        $.scrollUp({
            scrollText: '<i class="fa fa-angle-up"></i>',
            easingType: 'linear',
            scrollSpeed: 900,
            animation: 'fade'
        });


        $('.single-service.box-1').prepend('<span class="line"></span><span class="line"></span><span class="line"></span><span class="line"></span>');

      
        $('.accordion-content.in').siblings().addClass('active');
        $('.accordion').find('.accordion-title').on('click', function () {
            $('.accordion').removeClass('active');
            $(this).toggleClass('active');
         
            $(this).next().slideToggle('fast');
           
            $(".accordion-content").not($(this).next()).slideUp('fast');
        });



        
        $('.mainmenu-area a[href*="#"]')
         
          .not('[href="#"]')
          .not('[href="#0"]')
          .on('click',function(event) {
          
            if (
              location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
              &&
              location.hostname == this.hostname
            ) {
            
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
             
              if (target.length) {
               
                event.preventDefault();
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 1000, function() {
            
                  var $target = $(target);
                  $target.focus();
                  if ($target.is(":focus")) { 
                    return false;
                  } else {
                    $target.attr('tabindex','-1'); 
                    $target.focus(); 
                  };
                });
              }
            }
          });



    });
 
    $(window).on("load", function () {

        $('.preloader').fadeOut(500);

    });
})(jQuery);
