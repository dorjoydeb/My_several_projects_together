$(document).ready(function(){
    "use sctict";
    
    //OS check========================/
    function getOS() {
      var userAgent = window.navigator.userAgent,
          platform = window.navigator.platform,
          macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
          windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
          iosPlatforms = ['iPhone', 'iPad', 'iPod'],
          os = null;

      if (macosPlatforms.indexOf(platform) !== -1) {
        os = 'Mac OS';
      } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = 'iOS';
      } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = 'Windows';
      } else if (/Android/.test(userAgent)) {
        os = 'Android';
      } else if (!os && /Linux/.test(platform)) {
        os = 'Linux';
      }

      return os;
    }
    
    if (getOS() == "Windows") {
        $("body").addClass("os-windows");
    }
    
    if (getOS() == "iOS") {
        $("body").addClass("os-ios");
    }
    
    if (navigator.userAgent.search("Chrome") >= 0) {
        $("body").addClass("chrome-browser");
    }
    else if (navigator.userAgent.search("Firefox") >= 0) {
        $("body").addClass("firefox-browser"); 
    }
    else if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
        $("body").addClass("safari-browser");
    }
    else if (navigator.userAgent.search("Opera") >= 0) {
        $("body").addClass("opera-browser");
    }
    
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    
    if (/IEMobile|Windows Phone/i.test(navigator.userAgent)) {
        var windowsPhone = true;
    }
    
    if ((screen.width < 1040) && (screen.height > 1040)) {
        var iPad = true;
        $("body").addClass("ipad");
    }
    //OS check========================/
    
    //Scrollbar width========================/
    function scrollbarWidth() {
        var block = $('<div>').css({'height':'50px','width':'50px'}),
            indicator = $('<div>').css({'height':'200px'});

        $('body').append(block.append(indicator));
        var w1 = $('div', block).innerWidth();    
        block.css('overflow-y', 'scroll');
        var w2 = $('div', block).innerWidth();
        $(block).remove();
        return (w1 - w2);
    }
    //Scrollbar width========================/
    
    
    //Popup fix========================/
    function popupFunction(){  
        if((iOS == true) || (windowsPhone == true)) {
            var scrollTop = $(window).scrollTop();
            var windowH = $(window).innerHeight();

            $("body").addClass("pop-up-open");
            $("body").attr("data-top", scrollTop);
            if (windowsPhone == true) {
                $("body").css("top", scrollTop);
            }
            $("body").css({
                "top": "-" + scrollTop + "px"
            });
        }
    }

    function popupCloseFunction(){
        if((iOS == true) || (windowsPhone == true)) {
            var scTop = $("body").attr("data-top");
            if (windowsPhone == true) {
                var scTop = $("body").css("top");
            }
            var suffix = scTop.match(/\d+/);
            $("body").removeClass("pop-up-open");
            $("body").removeAttr("style");

            $("html, body").scrollTop(parseInt(suffix));
        }
    }
    //Popup fix========================/
    
    
    //if IE========================/
    function msieversion() {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");
        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))
        {
            //alert("IE");
            $("body").addClass("ie-browser");
            
            $(".ie-img").each(function(){
                var thisDiv = $(this),
                    thisImg = thisDiv.children("img"),
                    imgSrc = thisImg.attr("src");
                thisImg.hide();
                thisDiv.attr("style", "background-image: url(" + imgSrc + "); background-size: cover; background-position: center center; background-repeat: no-repeat;")
            });
        }
        else 
        {
            // not IE
        }
        return false;
    }
    msieversion();
    //if IE========================/
    
    $(window).on('resize',function() {
        if(( $("body").hasClass("ie-browser") ) && ($(".cart .table").length)){
            $(".cart .table .tbody .tr .td").each(function(){
                $(this).innerHeight($(this).innerHeight());
            });
        }
    });
    
    
    //Mainpage slider========================/
    if ($("#main-slider").length) {
        
        if (!$("body").hasClass("ie-browser")) {
            $("#main-slider .slide").each(function(){
            
                var thisSlide = $(this),
                    thisImg = thisSlide.find(".slide-img").attr("style");

                $("#next-slides").append('<div class="item" style="'+thisImg+'"></div>');
            });
        }
        
        
        $("#next-slides .item:first-child").addClass("active");
        $("#next-slides .item:nth-child(2)").addClass("next");
        $("#next-slides .item:last-child").addClass("prev");
        
        $('#main-slider').on('init', function(slick){
          var slides = $('#main-slider .slide').length;
            
            $(".main_slider .count .all").text(pad((slides), 2));
        });
        
        $('#main-slider').slick({
            arrows: true,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            swipe: true,
            fade: true,
            touchMove: true,
            draggable: true,
            autoplay: false,
            speed: 1500,
            autoplaySpeed: 20000,
            prevArrow: $('.main_slider .arrows .arrow.prev'),
            nextArrow: $('.main_slider .arrows .arrow.next'),
            responsive: [
                {
                  breakpoint: 1000,
                  settings: {
                    speed: 800
                  }
                }
              ]
        });
        
        
        $('#main-slider').on('beforeChange', function(event, 
         slick, currentSlide, nextSlide){
            var slides = $('#main-slider .slide').length;

            
            var activeItem = $(".next-slides .item").eq($(slick.$slides[currentSlide]).index());
            var nextItem = $(".next-slides .item").eq($(slick.$slides[nextSlide]).index());
            
                $(".next-slides .item").removeClass("prev");
                $(".next-slides .item").removeClass("next");
                $(".next-slides .item").removeClass("active");
            nextItem.addClass("active");
            
            setTimeout(function () {
                nextItem.next().addClass("next");
                
                if (nextItem.is(":last-child")) {
                    $(".next-slides .item:first-child").addClass("next");
                }
            }, 300);
            activeItem.addClass("prev");
            
            var nextSlide = $(slick.$slides[nextSlide]),
                nextSlideIndex = nextSlide.index();
            
            $(".main_slider .count .current").text(pad((nextSlideIndex+1), 2));
        });
        
        $(".main_slider .next-slides").on("click", ".next", function(){
            $("#main-slider").slick('slickNext');    
        });
    }
    //Mainpage slider========================/
    
    function pad (str, max) {
      str = str.toString();
      return str.length < max ? pad("0" + str, max) : str;
    }
    
    
    //Sliders========================/
    if ($("#articles_slider").length) {
        $('#articles_slider').slick({
            arrows: true,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            swipe: true,
            fade: true,
            touchMove: true,
            draggable: true,
            autoplay: true,
            speed: 700,
            autoplaySpeed: 20000,
            prevArrow: $('#articles_slider_block .arrows .arrow.prev'),
            nextArrow: $('#articles_slider_block .arrows .arrow.next'),
            responsive: [
                {
                  breakpoint: 1000,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 760,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                      arrows: false
                  }
                }
              ]
        });
    }
    
    if ($("#articles_slider-2").length) {
        $('#articles_slider-2').slick({
            arrows: true,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            swipe: true,
            fade: true,
            touchMove: true,
            draggable: true,
            autoplay: true,
            speed: 700,
            autoplaySpeed: 20000,
            prevArrow: $('#articles_slider_block-2 .arrows .arrow.prev'),
            nextArrow: $('#articles_slider_block-2 .arrows .arrow.next'),
            responsive: [
                {
                  breakpoint: 1000,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 760,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                      arrows: false
                  }
                }
              ]
        });
    }
    
    if ($("#products_slider").length) {
        
        var slides = $('#products_slider .product_item').length;
            
        $("#products_block .count .all").text(pad((slides), 2));
        
        $('#products_slider').slick({
            arrows: true,
            dots: false,
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            swipe: true,
            variableWidth: true,
            fade: false,
            touchMove: false,
            draggable: false,
            autoplay: true,
            speed: 700,
            autoplaySpeed: 20000,
            prevArrow: $('#products_block .arrows .arrow.prev'),
            nextArrow: $('#products_block .arrows .arrow.next'),
            responsive: [
                {
                  breakpoint: 1000,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                      variableWidth: true
                  }
                },
                {
                  breakpoint: 760,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                      arrows: false
                  }
                },
                {
                  breakpoint: 460,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                      arrows: false,
                      variableWidth: false
                  }
                }
              ]
        });
        
        
        
        $('#products_slider').on('beforeChange', function(event, 
         slick, currentSlide, nextSlide){
            var nextSlide = $(slick.$slides[nextSlide]),
                nextSlideIndex = +(nextSlide.attr("data-slick-index"));
            
            $("#products_block .count .current").text(pad((nextSlideIndex+2), 2));
        });
        
        $('#products_slider').get(0).slick.setPosition();
    }
    
    if ($("#products_slider-2").length) {
        var slides = $('#products_slider-2 .product_item').length;
            
        $("#products_block-2 .count .all").text(pad((slides), 2));
        
        $('#products_slider-2').slick({
            arrows: true,
            dots: false,
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            swipe: true,
            variableWidth: true,
            fade: false,
            touchMove: false,
            draggable: false,
            autoplay: true,
            speed: 700,
            autoplaySpeed: 20000,
            prevArrow: $('#products_block-2 .arrows .arrow.prev'),
            nextArrow: $('#products_block-2 .arrows .arrow.next'),
            responsive: [
                {
                  breakpoint: 1000,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                  }
                },
                {
                  breakpoint: 760,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                      arrows: false
                  }
                },
                {
                  breakpoint: 460,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                      arrows: false,
                      variableWidth: false
                  }
                }
              ]
        });
        
        $('#products_slider-2').on('beforeChange', function(event, 
         slick, currentSlide, nextSlide){
            var nextSlide = $(slick.$slides[nextSlide]),
                nextSlideIndex = +(nextSlide.attr("data-slick-index"));
            
            $("#products_block-2 .count .current").text(pad((nextSlideIndex+2), 2));
        });
        
        $('#products_slider-2').get(0).slick.setPosition();
    }
    //Sliders========================/
    
    
    
    //Menu========================/
    $(".menu_btn").on("click", function(){
        var _this = $(this);
        
        if (_this.hasClass("opened")) {
            popupCloseFunction();
            $("html, body").removeClass('locked');
            _this.removeClass('opened');
            $(".menu_block").fadeOut();
            $("body").removeAttr("style");
        }

        else {
            popupFunction();
            $("html, body").addClass('locked');
            _this.addClass('opened');
            $(".menu_block").fadeIn();
            $("body").css("margin-right", scrollbarWidth());
        }
    });
    
    $(".menu_block .close").on("click", function(){
        
        $(".menu_btn").removeClass("opened");
        $(".menu_block").fadeOut();
        $("html, body").removeClass("locked");
        popupCloseFunction();
        $("body").removeAttr("style");
    });
    //Menu========================/
    
    
    //Mobile Menu========================/
    $("#mobile-btn").on("click", function(){
        var _this = $(this);
        
        
        if (_this.hasClass("opened")) {
            popupCloseFunction();
            $("html, body").removeClass('locked');
            $(".top_panel").removeAttr('style');
            _this.removeClass('opened');
            $("#menu").removeClass("opened");
            $("#overlay").fadeOut();
        }

        else {
            popupFunction();
            $("html, body").addClass('locked');
            _this.addClass('opened');
            $(".top_panel").css('z-index', '6');
            $("#menu").addClass("opened");
            $("#overlay").fadeIn();
        }
    });
    
    $("#menu .close, #overlay").on("click", function(){
        
        popupCloseFunction();
        $("html, body").removeClass('locked');
        $(".top_panel").removeAttr('style');
        $("#mobile-btn").removeClass('opened');
        $("#menu").removeClass("opened");
        $("#overlay").fadeOut();
        $("body").removeAttr("style");
    });
    //Mobile Menu========================/
    
    
    //Search========================/
    $("#search-link").on("click", function(){
        
        $("#search-popup").fadeIn();
        $("#overlay").fadeIn();
        $("html, body").addClass("locked");
        popupFunction();
        $("body").css("margin-right", scrollbarWidth());
    });
    
    $("#search-popup .close, #overlay").on("click", function(){
        
        $("#search-popup").fadeOut();
        $("#overlay").fadeOut();
        $("html, body").removeClass("locked");
        popupCloseFunction();
        $("body").removeAttr("style");
    });
    //Search========================/
    
    
    $(window).on('resize',function() {
        if( window.innerWidth > 1000 ){
            var desktop = true;
        } else {
            var desktop = false;
        }
    });

    
    
    //Menu dropdown========================/
    if (screen.width > 1000) {
        $(".menu li").on({
            mouseenter: function () {
                if( window.innerWidth > 1000 ) {
                    var thisLi = $(this),
                        thisA = thisLi.children("a"),
                       thisMenu = thisA.next("ul");

                    if (thisMenu) {
                        thisMenu.stop( true, true ).fadeIn(120);
                    } else {
                        thisMenu.stop( true, true ).fadeOut(120);
                    }

                    thisLi.addClass("hover");
                }
                
            },
            mouseleave: function () {
                if( window.innerWidth > 1000 ) {
                    var thisLi = $(this),
                        thisA = thisLi.children("a"),
                       thisMenu = thisA.next("ul");

                    if (thisMenu) {
                        thisMenu.stop( true, true ).fadeOut(120);
                    } else {
                        thisMenu.stop( true, true ).fadeIn(120);
                    }
                    thisLi.removeClass("hover");
                }
                
            }
        });
        
        $(".menu_block .item").on({
            mouseenter: function () {
                if( window.innerWidth > 1000 ) {
                    var thisItem = $(this);

                    $(".menu_block .item").not(thisItem).removeClass("hover");
                    thisItem.addClass("hover");
                }
                
            },
            mouseleave: function () {
                if( window.innerWidth > 1000 ) {
                    var thisItem = $(this);

                    thisItem.removeClass("hover");
                }
                
            }
        });
    }
    
    $(".menu li a").on("click", function(e){
        
        var thisA = $(this),
            thisUl = thisA.next("ul");
        
        if(thisUl.length) {
            e.preventDefault();
            
            
            if ( window.innerWidth <= 1000 ) {
                thisUl.slideToggle();
            }
        }
    });
    //Menu dropdown========================/
    
    
    //Select value========================/
    $(".select_wrap select").on("change", function(){
        var thisValue = $(this).val();
        $(this).prev().text(thisValue);
    });
    //Select value========================/
    
    //Sliders in post========================/
    if ($(".js_slider").length) {
        $('.js_slider').each(function(key, item) {
     
          var sliderIdName = 'slider' + key;
          this.id = sliderIdName;
          var sliderId = '#' + sliderIdName;
            
          $(sliderId).slick({
            arrows: true,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            swipe: true,
            fade: true,
            touchMove: false,
            draggable: false,
            autoplay: true,
            speed: 600,
            autoplaySpeed: 20000
          });
            
        });    
    }
    //Sliders in post========================/
    
    
    
    //Share========================/
    $(".share-btn").on("click", function(e){
        e.preventDefault();
        
        $(".share-block").fadeIn();
        $("html, body").addClass("locked");
        popupFunction();
        $("body").css("margin-right", scrollbarWidth());
    });
    
    $(".share-block .close").on("click", function(e){
        e.preventDefault();
        
        $(".share-block").fadeOut();
        $("html, body").removeClass("locked");
        popupCloseFunction();
        $("body").removeAttr("style");
    });
    //Share========================/
    
    
    //Write comment========================/
    $(".js-comment-write").on("click", function(e){
        e.preventDefault();
        
        $("#write-review-block").fadeIn();
        $("#write-review-block").addClass("opened");
        $("html, body").addClass("locked");
        popupFunction();
        $("body").css("margin-right", scrollbarWidth());
    });
    
    $("#write-review-block .close, #overlay").on("click", function(e){
        e.preventDefault();
        
        $("#write-review-block").fadeOut();
        $("#write-review-block").removeClass("opened");
        $("html, body").removeClass("locked");
        popupCloseFunction();
        $("body").removeAttr("style");
    });
    //Write comment========================/
    
    
    //Modal close========================/
    $(".modal .close, #overlay").on("click", function(e){
        e.preventDefault();
        
        $(".modal").fadeOut();
        $(".modal").removeClass("opened");
        $("html, body").removeClass("locked");
        popupCloseFunction();
    });
    //Modal close========================/
    
    
    //User rating========================/
    $(".user-rating .star").on({
        mouseenter: function () {
            var thisStar = $(this),
               thisParent = thisStar.parent(".stars"),
               thisStarNum = thisStar.index();
              
            
            if (!thisParent.hasClass("selected")) {
                thisParent.children(".star").removeClass("fill");
              thisParent.children(".star").slice(0,thisStarNum+1).addClass("fill");
            }
        },
        mouseleave: function () {
            var thisStar = $(this),
               thisParent = thisStar.parent(".stars"),
               thisStarNum = thisStar.index();
              thisParent.children(".star").removeClass("fill");
        }
    });

    $(".user-rating .star").on("click", function(e){
        e.preventDefault();
        var thisStar = $(this),
           thisParent = thisStar.parent(".stars"),
           thisStarNum = thisStar.index();

        if (!thisParent.hasClass("selected")) {
            thisParent.children(".star").slice(0,thisStarNum+1).addClass("selected");
            thisParent.addClass("selected");
        }
          
    });
    //User rating========================/
    
    
    //Post slider in sidebar========================/
    if ($("#posts-slider").length) {
        $('#posts-slider').slick({
            arrows: true,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            swipe: true,
            fade: true,
            touchMove: true,
            draggable: true,
            autoplay: false,
            speed: 600,
            autoplaySpeed: 20000,
            responsive: [
                {
                  breakpoint: 1000,
                  settings: {
                    speed: 800
                  }
                }
              ]
        });
    }
    //Post slider in sidebar========================/
    
    
    
    //Shop categories dropdown========================/
    if ($(".shop-categories").length) {
        $(".list-item .button").on("click", function(e){
            e.preventDefault();
            var thisButton = $(this),
                thisUl = thisButton.siblings("ul"),
                thisParent = thisButton.parent();
            
            thisUl.slideToggle();
            thisParent.toggleClass("opened");
        });
    }
    //Shop categories dropdown========================/
    
    
    
    //Catalog item slider========================/
     if ($("#product-slider-nav").length) {
        $('#product-slider-wrap').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
            dots: false,
          fade: true,
            infinite: false,
          asNavFor: '#product-slider-nav'
        });
        $('#product-slider-nav').slick({
            vertical: true,
          slidesToShow: 5,
          slidesToScroll: 2,
          asNavFor: '#product-slider-wrap',
          dots: false,
            arrows: false,
          centerMode: false,
            infinite: false,
          focusOnSelect: true,
            responsive: [
            {
              breakpoint: 1130,
              settings: {
                vertical: false,
                  slidesToShow: 4
              }
            }
          ]
        });
    }
    //Catalog item slider========================/
    
    
    //Only numeric input========================/
    $('.js_number').on('keydown', function(e){
              if(e.key.length == 1 && e.key.match(/[^0-9+'"]/)){
                return false;
              };
            });
         
         $('.js_number').on('keyup', function(e){
             var thisMaxlength = $(this).attr("data-maxlength");
              if (this.value.length > +thisMaxlength)
                this.value = this.value.slice(0, this.maxLength)
            });
         
         $('.js_number').on('change', function(e){
            var thisInput = $(this);
          var thisVal = $(this).val();

            if (+thisVal <= 0) {
                thisInput.val(1);
            }
             
             if (+thisVal >100) {
                thisInput.val(100);
            }
        });
    //Only numeric input========================/
    
    
    
    //input + - ========================/
    (function quantityProducts() {
            var $quantityArrowMinus = $(".minus");
            var $quantityArrowPlus = $(".plus");


            $quantityArrowMinus.on("click", quantityMinus);
            $quantityArrowPlus.on("click", quantityPlus);

            function quantityMinus() {
              var $quantityNum = $(this).next("input");

              if ($quantityNum.val() > 1) {
                $quantityNum.val(+$quantityNum.val() - 1);
              }
            }

            function quantityPlus() {
                var $quantityNum = $(this).prev("input");
                if ($quantityNum.val() < 99) {
                    $quantityNum.val(+$quantityNum.val() + 1);
                  }

            }
        })();
    //input + - ========================/
    
    
    
    //Hide and show text========================/
    $(".show-text").on("click", function(e){
        e.preventDefault();
        var thisLink = $(this),
            thisText = thisLink.attr("data-show-text"),
            thisHideText = thisLink.attr("data-hide-text");
        
        if (thisLink.hasClass("opened")) {
            thisLink.text(thisText);
            thisLink.removeClass("opened");
            thisLink.siblings(".hidden-text").hide();
        } else {
            thisLink.text(thisHideText);
            thisLink.addClass("opened");
            thisLink.siblings(".hidden-text").show().css("display", "inline");
        }
    });
    //Hide and show text========================/
    
    
    //Fix slider in product page========================/
    $(window).on("resize", function(){
        if ($(".product-page").length) {
            var sliderOffset = $(".product-info--left").offset().top;
                
                var product_info_top = $(".product-info").offset().top;
                

            $(window).on("scroll", function(){
                var sliderHeight = $(".product-info--left").outerHeight();
                var product_info_Height = $(".product-info").outerHeight();

                var w_top = $(window).scrollTop();
                if((w_top>sliderOffset) && (!$(".product-info--left").hasClass("fixed"))) {
                    $(".product-info--left").addClass("fixed");
                  }

                if(w_top<=sliderOffset) {
                    $(".product-info--left").removeClass("fixed");
                  }

                if(w_top>((product_info_top + product_info_Height)-sliderHeight) ) {
                    $(".product-info--left").addClass("bottom");
                  }

                if(w_top<=((product_info_top + product_info_Height)-sliderHeight) ) {
                    $(".product-info--left").removeClass("bottom");
                  }
            });
        }
        
        if (window.innerWidth <= 1200) {
            $("body").addClass("desctop-min");
        }
    });
    //Fix slider in product page========================/
    
    $(window).trigger('resize');
    
    
    
    //If form success ========================/
    function success(){
        if($(".review-modal").hasClass("opened")) {
            $(".review-modal").hide();
            $("#success").show();
        } else {
            $("#success").fadeIn();
            $("html, body").addClass("locked");
            popupFunction();
        }
    }
    
    
    $(".submit").not(".submit-search").on("click", function(e){
        e.preventDefault();
        success();
    });
    //If form success ========================/
    
    
    //Edit delivery address ========================/
    $("#address_link").on("click", function(){
        $("#address-form").slideToggle();
    });
    //Edit delivery address ========================/
    
    
    //Slider and FAQ on 'about page' ========================/
    if ($("#about-us-slider").length) {
        $('#about-us-slider').slick({
            arrows: true,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            swipe: true,
            fade: false,
            touchMove: true,
            draggable: true,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 20000,
            prevArrow: $('.slider-wrap .arrows .arrow.prev'),
            nextArrow: $('.slider-wrap .arrows .arrow.next'),
            responsive: [
                {
                  breakpoint: 1000,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 760,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                      arrows: false
                  }
                }
              ]
        });
        
        $(".faq_item .faq_item-question").on("click", function(){
            var thisQuestion = $(this),
                thisAnswer = thisQuestion.next(),
                thisParent = thisQuestion.parent();
            
            thisParent.toggleClass("active");
            thisAnswer.slideToggle();
        });
    }
    //Slider on 'about page' ========================/
    
    //Modal open========================/
    $('.getModal').on('click', function(e){
        e.preventDefault();
        var thisLink = $(this);
        var target_modal = $(this).attr("data-href");
        $(target_modal).arcticmodal({
            openEffect:{speed:200},
            beforeOpen: function(data, el) {
                popupFunction();
            },
            afterClose: function(data, el) {
                popupCloseFunction();
            }
        });
    });
    
    $('.modal_close').on('click', function(){
        $(this).arcticmodal('close');
    });
    //Modal open========================/
    
});	
