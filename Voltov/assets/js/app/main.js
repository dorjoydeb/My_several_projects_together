jQuery(function ($) {
    "use strict";
    /*	Voltov v1.0
	==========================
    1-General
    2-custome select
    3-OWL slider
	*/

    var xv_ww = $(window).width(),
        xv_slideshow = true,
        navTopSpacing = 0,
        owl_controlable;
    $(window).on('resize load', function () {
        xv_ww = $(window).width();
        if (xv_ww <= 1030) {
            $('.responsive-menu').removeClass('xv-menuwrapper').addClass('dl-menuwrapper');
            $('.lg-submenu').addClass("dl-submenu");
        } else {
            $('.responsive-menu').removeClass('dl-menuwrapper').addClass('xv-menuwrapper');
            $('.lg-submenu').removeClass("dl-submenu");
        }

    });

    $(".articleVisual").each(function (num, ele) {
        var $bg = $(this).find("img").attr("src");
        $(this).css("background-image", "url(" + $bg + ")");
    });

    $('.custom-selectbox select').on('change', function () {
        var p = $(this).parent(".custom-selectbox");
        p.find('span').html($(this).find('option:selected').text());
    });

    if ($("#wpadminbar").length) {
        navTopSpacing = $("#wpadminbar").height();
        if (xv_ww < 580) {
            navTopSpacing = 0;
        }
    }
    $("#sticktop").sticky({
        topSpacing: navTopSpacing
    });
    $(".pagesList").sticky({
        topSpacing: 65 + navTopSpacing
    });
    $('body').on("click", "li.parent > a", function (e) {
        e.preventDefault();
        e.isImmediatePropagationStopped();
    });

    $('#dl-menu').dlmenu({
        animationClasses: {
            classin: 'dl-animate-in-5',
            classout: 'dl-animate-out-5'
        }
    });
    $('.field-wrap input,.field-wrap textarea').each(function (index, element) {
        if ($(this).val() !== "") {
            $('label[for=' + $(this).attr("id") + ']').hide();
        }
    });

    $('.field-wrap input,.field-wrap textarea').focus(function () {
        $('label[for=' + $(this).attr("id") + ']').hide();
    });
    $('.field-wrap input,.field-wrap textarea').blur(function () {
        if ($(this).val() === "") {
            $('label[for=' + $(this).attr("id") + ']').show();
        }
    });

    $('body').on("click", ".shareWrapper button,.showMoreOptions", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $(this).parents('.shareWrapper').addClass('active');
    });

    $(".cats").change(function () {
        location.href = jQuery(this).val();
    });

    $('body').on("click", function (e) {
        if ($(e.target).closest('.shareWrapper').length === 0) {
            $('.shareWrapper').removeClass('active');
        }
    });

    $('.animation-parent article').on('inview', function (event, visible) {
        if (visible === true) {
            $(this).addClass('animate').css('opacity', '1');
        }
    });


    /*======================================
	custome select
	=======================================*/
    $('.custome-select select').on('change', function () {
        var p = $(this).parent(".custome-select");
        p.find('span').html($(this).find('option:selected').text());
    });

    /*=========================================
    OWL slider
    ===========================================*/


    if (!$('.xv-owl-slider').hasClass('style3')) {

        owl_controlable = $(".xv-owl-wrap").owlCarousel({
            autoplaySpeed: 1000,
            navSpeed: 500,
            items: 1,
            dots: false,
            nav: true,
            center: true,
            callbacks: true,
            navText: ["<i class='icon-angle-left'></i>", "<i class='icon-angle-right'></i>"]
        });


    } else if ($('.xv-owl-slider').hasClass('style3')) {
        owl_controlable = $(".xv-owl-wrap").owlCarousel({
            autoplaySpeed: 1000,
            navSpeed: 500,
            items: 1,
            margin: 0,
            stagePadding: 0,
            loop: true,
            responsive: {
                600: {
                    items: 2
                }
            },
            dots: false,
            nav: true,
            center: true,
            callbacks: true,
            navText: ["<i class='icon-angle-left'></i>", "<i class='icon-angle-right'></i>"]
        });
    }




    $(".related-owl").owlCarousel({
        autoplaySpeed: 1000,
        navSpeed: 500,
        items: 1,
        margin: 0,
        navContainer: ".custome-owl-nav",
        responsive: {
            480: {
                items: 2,
                margin: 10
            },
            768: {
                items: 3,
                margin: 20
            },
            1024: {
                items: 3,
                margin: 40
            }
        },
        dots: false,
        nav: true,
        center: false,
        navText: ["<i class='icon-angle-left'></i>", "<i class='icon-angle-right'></i>"]
    });


    $(".multiImages").each(function (index, element) {
        $(this).owlCarousel({
            autoplaySpeed: 1000,
            navSpeed: 500,
            items: 1,
            dots: false,
            nav: true,
            center: true,
            navText: ["<i class='icon-angle-left'></i>", "<i class='icon-angle-right'></i>"]
        });
    });

    $('body').on("click", "#pbd-alp-load-posts a", function (e) {
        var target_el = $('.xv-ajax-wrap .multiImages').each(function (index, element) {
            if (!$(this).hasClass("owl-carousel")) {
                $(this).owlCarousel({
                    autoplaySpeed: 1000,
                    navSpeed: 500,
                    items: 1,
                    dots: false,
                    nav: true,
                    center: true,
                    navText: ["<i class='icon-angle-left'></i>", "<i class='icon-angle-right'></i>"]
                });
            }
        });
    });

});