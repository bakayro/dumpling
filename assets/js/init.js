var $ = jQuery.noConflict();

$(document).ready(function () {

    new WOW().init();
	
	
	/* FIRST OF ITEM SLIDERS LEAVES FROM LEFT SIDE */

	$('.gallery-slider').on('translated.owl.carousel', function(event) {
		checkClasses();
	});

	function checkClasses(){
 
		$('.gallery-slider .owl-stage .owl-item').removeClass('left');

		$('.gallery-slider .owl-stage .owl-item.active').each(function(index){
			if (index === 0) {
				$(this).addClass('left');
			}
		});
	};

    /* HEADER Fixed after scrolling */
    $(window).scroll(function () {
        var top = $(document).scrollTop();
        if (top > 70) $(".subscribe-box").addClass('fixed');
        else $(".subscribe-box").removeClass('fixed');
    });

    /* close subscribe-box on click btn-close */
    $('.subscribe-box .btn-close').click(function () {
        $('.subscribe-box').slideUp(200);
    });

    /* SEARCH SECTION IN HEADER */
    $('.btn-search').click(function () {
        $('header .input-box').toggleClass('active');
        $('body').toggleClass('overflow');
        $('.menu-wrapper').removeClass('show');
		$('.burger-btn').removeClass('active');
		
		/* CHANGE CLOSE-BTN */
		if ($('header .input-box').hasClass('active')) {
			$('header i.flaticon-search').removeClass('flaticon-search').addClass('flaticon-close');
		}
		else {
			$('header i.flaticon-close').addClass('flaticon-search').removeClass('flaticon-close');
		}
		
    });

    /* SEARCH SECTION // BROWSE RECIPES PAGE  */
    $('.search-box p').click(function () {
        $(this).siblings('.search-box ul').slideToggle();
    });

    /* CLOSE THE SEARCH SECTION IN HEADER */
    $(".btn-close").click(function (e) {
        $('header .input-box').removeClass('active');
        $('body').removeClass('overflow');
        event.preventDefault();
    });

    /* MOBILE MNEU OPEN */
    $('.burger-btn').click(function () {
        $('header .input-box').removeClass('active');
		$('.fast-contact.fixed').toggleClass('show');
        $('.menu-wrapper').toggleClass('show');
        $('body').toggleClass('overflow');
        $(this).toggleClass('active');
		$('header i.flaticon-close').addClass('flaticon-search').removeClass('flaticon-close');
    });

    /* MAIN SLIDER */
    $('.main-slider').owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        navText: ["<i class='flaticon-left-arrow'></i>", "<i class='flaticon-next'></i>"],
        autoplay: false,
        smartSpeed: 1700,
        autoplayTimeout: 6500,
        autoplayHoverPause: false,
        autoHeight: false,
        items: 1
    });

    /* MAIN PAGE // CATEGORY SLIDER */
    $('.category-slider').owlCarousel({
        loop: true,
        dots: false,
        navText: ["<i class='flaticon-left-arrow'></i>", "<i class='flaticon-next'></i>"],
        margin: 10,
        autoplay: false,
        smartSpeed: 1700,
        autoplayTimeout: 6500,
        items: 7,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            992: {
                items: 5,
            },
            1300: {
                items: 7
            }
        }
    });

    /* GALLERY SLIDER*/

    $('.gallery-slider').owlCarousel({
        loop: true,
        dots: false,
        nav: false,
        autoplay: false,
        smartSpeed: 1700,
        autoplayTimeout: 6500,
        autoplayHoverPause: false,
        autoHeight: false,
        items: 7,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 3,
            },
            767: {
                items: 4,
            },
            992: {
                items: 5,
            },
            1200: {
                items: 6
            }
        }
    });

    /* ALSO INTERESTING // BLOG PAGE */
    $('.also-interesting').owlCarousel({
        loop: true,
        dots: false,
        margin: 15,
        nav: true,
        navText: ["<i class='flaticon-left-arrow'></i>", "<i class='flaticon-next'></i>"],
        autoplay: false,
        smartSpeed: 1700,
        autoplayTimeout: 6500,
        autoplayHoverPause: false,
        autoHeight: false,
        items: 4,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            767: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4
            }
        }
    });

    /* BROWSE RECIPES // BREAKFAST-SLIDER */
    $('.breakfast-slider').owlCarousel({
        loop: true,
        dots: false,
        margin: 15,
        nav: true,
        navText: ["<i class='flaticon-left-arrow'></i>", "<i class='flaticon-next'></i>"],
        autoplay: false,
        smartSpeed: 1700,
        autoplayTimeout: 6500,
        autoplayHoverPause: false,
        autoHeight: false,
        items: 4,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            767: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4
            }
        }
    });

    /* BROWSE RECIPES // flour-dish-SLIDER */
    $('.flour-dish-slider').owlCarousel({
        loop: true,
        dots: false,
        margin: 15,
        nav: true,
        navText: ["<i class='flaticon-left-arrow'></i>", "<i class='flaticon-next'></i>"],
        autoplay: false,
        smartSpeed: 1700,
        autoplayTimeout: 6500,
        autoplayHoverPause: false,
        autoHeight: false,
        items: 4,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            767: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4
            }
        }
    });

    /* BROWSE RECIPES // DIARY-SLIDER */
    $('.diary-slider').owlCarousel({
        loop: true,
        dots: false,
        margin: 15,
        nav: true,
        navText: ["<i class='flaticon-left-arrow'></i>", "<i class='flaticon-next'></i>"],
        autoplay: false,
        smartSpeed: 1700,
        autoplayTimeout: 6500,
        autoplayHoverPause: false,
        autoHeight: false,
        items: 4,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            767: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4
            }
        }
    });

    /* BROWSE RECIPES // SOUPS-SLIDER */
    $('.soups-slider').owlCarousel({
        loop: true,
        dots: false,
        margin: 15,
        nav: true,
        navText: ["<i class='flaticon-left-arrow'></i>", "<i class='flaticon-next'></i>"],
        autoplay: false,
        smartSpeed: 1700,
        autoplayTimeout: 6500,
        autoplayHoverPause: false,
        autoHeight: false,
        items: 4,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            767: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4
            }
        }
    });

    /* BROWSE RECIPES // LUNCH-SLIDER */
    $('.lunch-slider').owlCarousel({
        loop: true,
        dots: false,
        margin: 15,
        nav: true,
        navText: ["<i class='flaticon-left-arrow'></i>", "<i class='flaticon-next'></i>"],
        autoplay: false,
        smartSpeed: 1700,
        autoplayTimeout: 6500,
        autoplayHoverPause: false,
        autoHeight: false,
        items: 4,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            767: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4
            }
        }
    });

    /* SELECT LANGUAGE */
    (function () {
        $(document).ready(function () {
            $('.select-placeholder').on('click', function () {
                $(this).parent().toggleClass('is-open');
            });

            $('.select-option').on('click', function () {
                var language = $(this).attr('data-language');

                $('.select-placeholder').attr('data-language', language);
            });
        });

    })(jQuery);


    /* TABS // ABOU-ME PAGE */
    $('.tab-head h4').click(function () {
        $(this).parents('.tab-head').siblings('.tab-body').slideToggle("slow");
        $(this).children('.flaticon-next').toggleClass("rotate");
    });
});