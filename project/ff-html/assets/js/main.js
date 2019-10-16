var ff = {
    init: function () {
        this.init_menu();
        var bLazy = new Blazy({
            success: function (element) {
            },
            error: function (ele, msg) {
                if (msg === 'missing') {
                }
                else if (msg === 'invalid') {
                }
            }
        });
        this.init_mobile();
        this.init_single_slide();
        this.init_magnifier();
        this.responsive();

        $(window).resize(function() {
            ff.responsive();
        });
    },
    init_menu: function () {
        $('#main-menu .links .link').hover(function () {
            if ($(this).find('.sub-links').length > 0) {
                $(this).addClass('open');
                // $(this).find('.sub-links').addClass('open');
            }
        }, function (e) {
            $(this).removeClass('open');
        });
        $('#main-menu .links .link .sub-links .item').hover(function () {
            if ($(this).find('.sub-links').length > 0) {
                $(this).parent().addClass('open');
                $(this).addClass('open');
                $(this).find('.sub-links').addClass('open');
            }
        }, function () {
            $(this).removeClass('open');
        });
        $('#main-menu .links .link .sub-links .item .sub-links').hover(function () {
            setTimeout(() => {
                $(this).parent().addClass('open');
                $(this).parent().parent().parent().parent().addClass('open');
            }, 100);
        }, function () {
            $(this).parent().removeClass('open');
        });
    },
    init_single_slide: function () {
        $('.single-slide').owlCarousel({
            loop: true,
            margin: 0,
            lazyLoad: true,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        })
    },
    init_magnifier: function () {
        
        $('#ex1').zoom();
        // $('#ex2').zoom({ on: 'grab' });
        // $('#ex3').zoom({ on: 'click' });
        // $('#ex4').zoom({ on: 'toggle' });
    },
    responsive: function() {
        var mbDetect = new MobileDetect(window.navigator.userAgent);
        if (mbDetect.mobile() || window.innerWidth <= 768) {
            $('html').addClass('mobile');
        } else {
            $('html').removeClass('mobile');
        }

        if (mbDetect.tablet() || (window.innerWidth <= 1080 &&  window.innerWidth > 768 ) ) {
            $('html').addClass('tablet');
        } else {
            $('html').removeClass('tablet');
        }
    },
    init_mobile: function() {
        $('.btn-search-menu').click(function(){
            $('.ff-header').toggleClass('open-search-mb');            
            $('.ff-header').removeClass('open-menu-mb');          
            $('body').toggleClass('menu-mb-open');
        });
        $('.btn-toogle-menu').click(function(){
            $('.ff-header').toggleClass('open-menu-mb');
            $('.ff-header').removeClass('open-search-mb');       
            $('body').toggleClass('menu-mb-open');
        });
    }
}
$(document).ready(function () {
    ff.init();
});
