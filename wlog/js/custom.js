/*--------------------- Copyright (c) 2018 -----------------------
[Master Javascript]
Project: Wlog - Blog and Magazine HTML template 
Version: 1.0.0
Assigned to: Theme Forest
-------------------------------------------------------------------*/
(function($) {
    "use strict";
	
	var assect_cookie=0;
    var blog = {
        initialised: false,
        version: 1.0,
        mobile: false,
        init: function() {
            if (!this.initialised) {
                this.initialised = true;
            } else {
                return;
            }
            /*-------------- Blog Functions Calling ---------------------------------------------------
            ------------------------------------------------------------------------------------------------*/
            this.RTL();
			this.Menu();
			this.HeaderSlider();
            this.BannerSlider();
            this.WorldNews_Slider();
            this.Sport_Slider();
            this.Food_Health();
            this.Travel_Slider();
            this.TechnologySlider();
            this.MoreOption_Sidebar();
            this.Magnific_Popup();
            this.UserProfile();
            this.Search_Popup();
            this.RightToggle();
            this.NavToggleOpen();
            this.BannerLeftSlider();
            this.BannerRightSlider();
            this.BannerCenterSlider();
            this.SortToggle();
            this.Fullwidth_Multislide_Slider();
            this.InstargamSlider();
            this.CookiesPopup();
            this.SinglepageToggle();
            this.CommentAction();
            this.CustomTab();
            this.TestimonialSlider();
            this.ContactFormSubmit();
            this.StickySidebar();
            this.wow();
        },
        /*-------------- Blog Functions definition ---------------------------------------------------
        ---------------------------------------------------------------------------------------------------*/
        RTL: function() {
            var rtl_attr = $("html").attr('dir');
            if (rtl_attr) {
                $('html').find('body').addClass("rtl");
            }
        },
        // Toggle Menu
		/*menu toggle*/
		Menu: function() {
			var wh = window.innerWidth;
        // //Go to top
        if (wh <991) {
			$('.blog_menu_toggle').on('click', function(e)  {
				
				if($('.blog_main_menu_innerdiv li.dd_open').length){
					$('.blog_main_menu_innerdiv li.dd_open .sub-menu').hide();
					$('.blog_main_menu_innerdiv li.dd_open').removeClass('dd_open');
				}
				
				
				$(".blog_main_menu ").slideToggle("slow");				
			}); 
		
			$(document).on('click', ".blog_main_menu_innerdiv ul li.blog_dropdown", function(e)  {
				$('.blog_main_menu_innerdiv ul li.dd_open').not($(this)).removeClass('dd_open').find("ul.sub-menu").slideUp();
				$(this).addClass('dd_open').find('.sub-menu').slideToggle();
			});
		}
		$(".blog_main_menu_innerdiv ul li ul.sub-menu").parent("li").addClass("blog_dropdown");
		},
        // Slider
        HeaderSlider: function() {
			var swiper = new Swiper('.blog_tranding_slider .swiper-container', {
				direction: 'vertical',
				loop: true,
				speed: 1500,
				autoplay:true,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				}
			});
		},
		BannerSlider: function(){
			  var galleryThumbs = new Swiper('.gallery-thumbs', {
				spaceBetween: 20,
				direction:'vertical',
				slidesPerView: 'auto',
				loop: false, 
				touchRatio: 1,
				freeMode: true,
				loopedSlides: 3, //looped slides should be the same
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
				breakpoints: {
					1800: {
						direction: 'vertical',
					},
					1400: {
						direction: 'vertical',
					},
					992: {
						direction: 'vertical',
					},
					767: {
						direction: 'horizontal',
						touchRatio: 0.2,
					},
					640: {
						direction: 'horizontal',
						touchRatio: 0.2,
					},
					480: {
						direction: 'horizontal',
						touchRatio: 0.2,
					},
					375: {
						direction: 'horizontal',
						touchRatio: 0.2,
					}
				},
			});
			var galleryTop = new Swiper('.gallery-top', {
				spaceBetween: 0,
				loop:false,
				touchRatio: 0,
				effect:'fade',
				loopedSlides: 3, //looped slides should be the same
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				thumbs: {
					swiper: galleryThumbs,
				},
				breakpoints: {
					767: {
						direction: 'horizontal',
						touchRatio: 0.2,
					},
					640: {
						direction: 'horizontal',
						touchRatio: 0.2,
					},
					480: {
						direction: 'horizontal',
						touchRatio: 0.2,
					},
					375: {
						direction: 'horizontal',
						touchRatio: 0.2,
					}
				},
			});
		},
		WorldNews_Slider: function(){
		
			 new Swiper('.blog_world_news_slider .swiper-container', {
				loop: false,
				loopedSlides: 1,
                slidesPerView: 1,
				slidesPerColumn: 2,
                spaceBetween: 0,				
				navigation: {
					nextEl: '.worldnews-swiper-button-next',
					prevEl: '.worldnews-swiper-button-prev',
				},
				breakpoints: {
					767: {
						slidesPerColumn: 2,
					},		
					480: {
						slidesPerColumn: 1,
					},			
				},
			});
			$('.worldnews_tab .tab-pane').css("display","none");
			$('#nav-tab a').on('click', function(e){
				var t = $(this).attr('href');
				$('.worldnews_tab .tab-pane').hide();
				$(t).show();
				//return false;

			});
			$('.worldnews_tab .tab-pane.active.show').show();
			
			$('.worldnews_tab2 .tab-pane').css("display","none");
			
			$('#nav-tab a').on('click', function(e){
				$('.worldnews_tab2  .custom_tab_content .tab').css('display' , 'none');
				var t = $(this).attr('href');
				$('.worldnews_tab2 .tab-pane').hide();
				$(t).show();
				//return false;

			});
			$('.worldnews_tab2 .tab-pane.active.show').show();
			
			$('.worldnews_tab2 .tabs.animated-fade .tab-links .link_data a').on('click', function(e)  {
				$('.worldnews_tab2 .tab-content .tab-pane').css('display' , 'none');
			});
		},
		CustomTab: function(){
			$('.custom_tab_content .tab').hide();
			$('.tabs.animated-fade .tab-links .link_data a').on('click', function(e)  {
				var currentAttrValue = $(this).attr('href');
					
				// Show/Hide Tabs
				$('.custom_tab_content ' + currentAttrValue).show().addClass('show').siblings().hide().removeClass('show');

				// Change/remove current tab to active
				$(this).parent('li').addClass('active').siblings().removeClass('active');

				e.preventDefault();
			});
		},
		Sport_Slider: function(){
			 new Swiper('.blog_sport_slider .swiper-container', {
				slidesPerView: 2,
				slidesPerColumn: 3,
                spaceBetween: 20,				
				navigation: {
					nextEl: '.sport-swiper-button-next',
					prevEl: '.sport-swiper-button-prev',
				},
				breakpoints: {
					 1024: {  
						slidesPerColumn: 3,
						slidesPerView: 2,
					},
					767: {
						slidesPerColumn: 1,
						slidesPerView: 1,
					},	
					320: {
						slidesPerColumn: 1,
						slidesPerView: 1,
					},						
				},
			});
			$('.blog_sports .tab-pane').css("display","none");
			$('#nav-tab1 a').on('click', function(e){
				$('.blog_sports .custom_tab_content .tab').css('display' , 'none');
				var t = $(this).attr('href');
				$('.blog_sports .tab-pane').hide();
				$(t).show();
				//return false;

			});
			$('.blog_sports .tab-pane.active.show').show();
			
			$('.blog_sports .tabs.animated-fade .tab-links .link_data a').on('click', function(e)  {
				$('.blog_sports .tab-content .tab-pane').css('display' , 'none');
			});
			
		},
		Food_Health: function(){
			var galleryThumbs = new Swiper('.thumbs1', {
				spaceBetween: 20,
				direction:'vertical',
				slidesPerView: 'auto',
				loop: false,
				touchRatio: 0.1,
				freeMode: true,
				loopedSlides: 5, //looped slides should be the same
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
				
				breakpoints: {
					1800: {
						direction: 'vertical',
					},
					1400: {
						direction: 'vertical',
					},
					992: {
						direction: 'vertical',
					},
					767: {
						direction: 'horizontal',
						touchRatio: 0.2,
					},
					640: {
						direction: 'horizontal',
						touchRatio: 0.2,
					},
					480: {
						direction: 'horizontal',
						touchRatio: 0.2,
					},
					375: {
						direction: 'horizontal',
						touchRatio: 0.2,
					}
				},
			});
			var galleryTop = new Swiper('.gallery1', {
				spaceBetween: 0,
				loop:false,
				touchRatio: 0,
				//direction:'vertical',
				effect: 'fade',
				loopedSlides: 3, //looped slides should be the same
				navigation: {
					nextEl: '.tab-next-1',
					prevEl: '.tab-prev-1',
				},
				thumbs: {
					swiper: galleryThumbs,
				},
				
				breakpoints: {
					767: {
						direction: 'horizontal',
						touchRatio: 0.2,
					},
					640: {
						direction: 'horizontal',
						touchRatio: 0.2,
					},
					480: {
						direction: 'horizontal',
						touchRatio: 0.2,
					},
					375: {
						direction: 'horizontal',
						touchRatio: 0.2,
					}
				},
			});
			/*for second tab*/
			var galleryThumbs = new Swiper('.thumbs2', {
				spaceBetween: 20,
				direction:'vertical',
				slidesPerView: 'auto',
				loop: false,
				touchRatio: 0.1,
				freeMode: true,
				loopedSlides: 5, //looped slides should be the same
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
				
				breakpoints: {
					1800: {
						direction: 'vertical',
					},
					1400: {
						direction: 'vertical',
					},
					992: {
						direction: 'vertical',
					},
					767: {
						direction: 'horizontal',
						touchRatio: 0.2,
					},
					640: {
						direction: 'horizontal',
						touchRatio: 0.2,
					},
					480: {
						direction: 'horizontal',
						touchRatio: 0.2,
					},
					375: {
						direction: 'horizontal',
						touchRatio: 0.2,
					}
				},
			});
			var galleryTop = new Swiper('.gallery2', {
				spaceBetween: 0,
				loop:false,
				touchRatio: 0,
				//direction:'vertical',
				effect: 'fade',
				loopedSlides: 3, //looped slides should be the same
				navigation: {
					nextEl: '.tab-next-2',
					prevEl: '.tab-prev-2',
				},
				thumbs: {
					swiper: galleryThumbs,
				},
				
				breakpoints: {
					767: {
						direction: 'horizontal',
						touchRatio: 0.2,
					},
					640: {
						direction: 'horizontal',
						touchRatio: 0.2,
					},
					480: {
						direction: 'horizontal',
						touchRatio: 0.2,
					},
					375: {
						direction: 'horizontal',
						touchRatio: 0.2,
					}
				},
			});
			/*for third tab*/
			var galleryThumbs = new Swiper('.thumbs3', {
				spaceBetween: 20,
				direction:'vertical',
				slidesPerView: 'auto',
				loop: false,
				touchRatio: 0.1,
				freeMode: true,
				loopedSlides: 5, //looped slides should be the same
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
				
				breakpoints: {
					1800: {
						direction: 'vertical',
					},
					1400: {
						direction: 'vertical',
					},
					992: {
						direction: 'vertical',
					},
					767: {
						direction: 'horizontal',
						touchRatio: 0.2,
					},
					640: {
						direction: 'horizontal',
						touchRatio: 0.2,
					},
					480: {
						direction: 'horizontal',
						touchRatio: 0.2,
					},
					375: {
						direction: 'horizontal',
						touchRatio: 0.2,
					}
				},
			});
			var galleryTop = new Swiper('.gallery3', {
				spaceBetween: 0,
				loop:false,
				touchRatio: 0,
				//direction:'vertical',
				effect: 'fade',
				loopedSlides: 3, //looped slides should be the same
				navigation: {
					nextEl: '.tab-next-3',
					prevEl: '.tab-prev-3',
				},
				thumbs: {
					swiper: galleryThumbs,
				},
				
				breakpoints: {
					767: {
						direction: 'horizontal',
						touchRatio: 0.2,
					},
					640: {
						direction: 'horizontal',
						touchRatio: 0.2,
					},
					480: {
						direction: 'horizontal',
						touchRatio: 0.2,
					},
					375: {
						direction: 'horizontal',
						touchRatio: 0.2,
					}
				},
			});
			/*for fourth tab*/
			var galleryThumbs = new Swiper('.thumbs4', {
				spaceBetween: 20,
				direction:'vertical',
				slidesPerView: 'auto',
				loop: false,
				touchRatio: 0.1,
				freeMode: true,
				loopedSlides: 5, //looped slides should be the same
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
				
				breakpoints: {
					1800: {
						direction: 'vertical',
					},
					1400: {
						direction: 'vertical',
					},
					992: {
						direction: 'vertical',
					},
					767: {
						direction: 'horizontal',
						touchRatio: 0.2,
					},
					640: {
						direction: 'horizontal',
						touchRatio: 0.2,
					},
					480: {
						direction: 'horizontal',
						touchRatio: 0.2,
					},
					375: {
						direction: 'horizontal',
						touchRatio: 0.2,
					}
				},
			});
			var galleryTop = new Swiper('.gallery4', {
				spaceBetween: 0,
				loop:false,
				touchRatio: 0,
				//direction:'vertical',
				effect: 'fade',
				loopedSlides: 3, //looped slides should be the same
				navigation: {
					nextEl: '.tab-next-4',
					prevEl: '.tab-prev-4',
				},
				thumbs: {
					swiper: galleryThumbs,
				},
				
				breakpoints: {
					767: {
						direction: 'horizontal',
						touchRatio: 0.2,
					},
					640: {
						direction: 'horizontal',
						touchRatio: 0.2,
					},
					480: {
						direction: 'horizontal',
						touchRatio: 0.2,
					},
					375: {
						direction: 'horizontal',
						touchRatio: 0.2,
					}
				},
			});
			/*for fifth tab*/
			var galleryThumbs = new Swiper('.thumbs5', {
				spaceBetween: 20,
				direction:'vertical',
				slidesPerView: 'auto',
				loop: false,
				touchRatio: 0.1,
				freeMode: true,
				loopedSlides: 5, //looped slides should be the same
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
				
				breakpoints: {
					1800: {
						direction: 'vertical',
					},
					1400: {
						direction: 'vertical',
					},
					992: {
						direction: 'vertical',
					},
					767: {
						direction: 'horizontal',
						touchRatio: 0.2,
					},
					640: {
						direction: 'horizontal',
						touchRatio: 0.2,
					},
					480: {
						direction: 'horizontal',
						touchRatio: 0.2,
					},
					375: {
						direction: 'horizontal',
						touchRatio: 0.2,
					}
				},
			});
			var galleryTop = new Swiper('.gallery5', {
				spaceBetween: 0,
				loop:false,
				touchRatio: 0,
				//direction:'vertical',
				effect: 'fade',
				loopedSlides: 3, //looped slides should be the same
				navigation: {
					nextEl: '.tab-next-5',
					prevEl: '.tab-prev-5',
				},
				thumbs: {
					swiper: galleryThumbs,
				},
				
				breakpoints: {
					767: {
						direction: 'horizontal',
						touchRatio: 0.2,
					}, 
					640: {
						direction: 'horizontal',
						touchRatio: 0.2,
					},
					480: {
						direction: 'horizontal',
						touchRatio: 0.2,
					},
					375: {
						direction: 'horizontal',
						touchRatio: 0.2,
					}
				},
			});
			$('.blog_food_health .tab-pane').css("display","none");
			$('#nav-tab2 a').on('click', function(e){
				$('.blog_food_health .custom_tab_content .tab').css('display' , 'none');
				var t = $(this).attr('href');
				$('.blog_food_health .tab-pane').hide();
				$(t).show();
				//return false;

			});
			$('.blog_food_health .tab-pane.active.show').show();
						
			$('.blog_food_health .tabs.animated-fade .tab-links .link_data a').on('click', function(e)  {
				$('.blog_food_health .tab-content .tab-pane').css('display' , 'none');
			});
		},
		Travel_Slider: function(){
			 new Swiper('.blog_travel_slider .swiper-container', {
				loop: false,
				loopedSlides: 1,
                slidesPerView: 1,
				slidesPerColumn: 2,
                spaceBetween: 0,				
				navigation: {
					nextEl: '.travel-swiper-button-next',
					prevEl: '.travel-swiper-button-prev',
				},
				breakpoints: {
					767: {
						slidesPerColumn: 2,
					},					
				},
			});
			
			$('.blog_travel .tab-pane').css("display","none");
			$('#nav-tab3 a').on('click', function(e){
				$('.blog_travel .custom_tab_content .tab').css('display' , 'none');
				var t = $(this).attr('href');
				$('.blog_travel .tab-pane').hide();
				$(t).show();
				//return false;

			});
			$('.blog_travel .tab-pane.active.show').show();
						
			$('.blog_travel .tabs.animated-fade .tab-links .link_data a').on('click', function(e)  {
				$('.blog_travel .tab-content .tab-pane').css('display' , 'none');
			});
		},
		TechnologySlider: function(){
			 new Swiper('.blog_technology_slider .swiper-container', {
				loop: false,
				loopedSlides: 1,
                slidesPerView: 1,
				slidesPerColumn: 4,
                spaceBetween: 0,				
				navigation: {
					nextEl: '.technology-swiper-button-next',
					prevEl: '.technology-swiper-button-prev',
				},
				breakpoints: {
					767: {
						slidesPerView: 1,
						slidesPerColumn: 1,
					},					
				},
			});
			
			$('.blog_technology .tab-pane').css("display","none");
			$('#nav-tab4 a').on('click', function(e){
				$('.blog_technology .custom_tab_content .tab').css('display' , 'none');
				var t = $(this).attr('href');
				$('.blog_technology .tab-pane').hide();
				$(t).show();
				//return false;

			});
			$('.blog_technology .tab-pane.active.show').show();
									
			$('.blog_technology .tabs.animated-fade .tab-links .link_data a').on('click', function(e)  {
				$('.blog_technology .tab-content .tab-pane').css('display' , 'none');
			});
		},
		MoreOption_Sidebar: function(){
			$(".blog_news_action").on('click', function(e) {
				$('ul.more_option').not($(this).closest('.blog_news').find('ul.more_option')).removeClass('open_option');
                $(this).closest('.blog_news').find('ul.more_option').toggleClass('open_option');
            });
			$(document).on('click' , function(e){
				if(!$(e.target).closest('.blog_news_action').length){
					$('ul.more_option').removeClass("open_option");
				}
			});
		},
		Magnific_Popup: function(){
			$('.widget_instagram_news ul li').magnificPopup({
                delegate: 'a.blog_popup',
                type: 'image',
                mainClass: 'mfp-with-zoom',
                gallery: {
                    enabled: true,
				},
			});
		},
		UserProfile: function(){
			$(document).on("click", '.blog_user_div a' , function(){
				$(this).closest('.blog_user_div').toggleClass("profile_open");
			});
			
			$('.blog_user_div').html('<div class="blogUserWrapper">'+$('.blog_user_div').html()+'</div>');
			
			$(document).on('click' , function(e){
				if(!$(e.target).closest('.blogUserWrapper').length){
					$('.blog_user_div').removeClass("profile_open");
				}
			});
		},
		Search_Popup: function(){
			$(".blog_search > a").on("click", function(){
				$(this).parent().addClass('show_search');
			});
			$(".search_close").on("click", function(){
				$('.search_close').closest('.blog_search ').removeClass('show_search');
			});	
		},
		RightToggle: function(){
			$(".blog_righttoggle a").on("click", function(){
				$('body').addClass('right_toggle_open');
			});
			$(".toggle_close").on("click", function(){
				$('body').removeClass('right_toggle_open');
			});
			$(".outer_close").on("click", function(){
				$('body').removeClass('right_toggle_open'); 
			});
		},
		NavToggleOpen: function(){
			$(".tab_toggle_menu a").on("click", function(){
				
				$('.nav-tabs').not($(this).closest('.blog_topheading_slider_nav').find('.nav-tabs')).removeClass('nav_toggle_open');
                $(this).closest('.blog_topheading_slider_nav').find('.nav-tabs').toggleClass('nav_toggle_open');
			});
			
		},
		BannerLeftSlider:function(){
			new Swiper('.blog_banner_slider_left_vertical .swiper-container', {
				spaceBetween: 0,
				direction:'vertical', 
				slidesPerView: 3,
				loop: true,
				autoplay: { 
					delay: 2000
				},
				touchRatio: 0.1,
				freeMode: true,
				loopedSlides: 3, //looped slides should be the same
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
			});
		}, 
		BannerRightSlider:function(){
			new Swiper('.blog_banner_slider_right_vertical .swiper-container', {
				spaceBetween: 0,
				direction:'vertical',
				slidesPerView: 3,
				loop: true, 
				autoplay: {
					delay: 2000,
					reverseDirection:true,
				},
				touchRatio: 0.1,
				freeMode: true,
				loopedSlides: 3, //looped slides should be the same
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
			 });
		},
		BannerCenterSlider: function(){
			var swiper = new Swiper('.blog_banner_slider_center .swiper-container', {
				spaceBetween: 0,
				loop:false,
				touchRatio: 0,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			});
		},
		SortToggle: function(){
			$('.blog_sorting_togglediv span').on("click", function(e){
				$('.sort_toggleclose').closest('.blog_sorting_option').slideUp(200);
				e.preventDefault();
				$(this).parent().find('.blog_sorting_option').slideDown(200);
			});
			$('.sort_toggleclose').on("click", function(e){ 
				e.preventDefault();
				$(this).closest('.blog_sorting_option').slideUp(200);
			});
			$(document).on('click' , function(e){
				if(!$(e.target).closest('.blog_sorting_togglediv').length){
					$('.sort_toggleclose').closest('.blog_sorting_option').slideUp(200);
				}
			});
		},
		Fullwidth_Multislide_Slider: function(){
			var swiper = new Swiper('.blog_fullwidth_multislide_slider .swiper-container', {
				slidesPerView: 6,
				spaceBetween: 20,
				loop: true,
				autoplay: {
					delay: 2000
				},
				touchRatio: 0.1,
				freeMode: true,
				loopedSlides: 6, //looped slides should be the same		
				breakpoints: {
					// when window width is <= 320px
					480: {
							slidesPerView: 1,
						},
					// when window width is <= 480px
					600: {
					  slidesPerView: 2,
					},
					// when window width is <= 640px
					767: {
					  slidesPerView: 3,
					},	
					// when window width is <= 640px
					992: {
					  slidesPerView: 3,
					},	
					1200: {
					  slidesPerView: 5,
					},
					1530: {
					  slidesPerView: 5, 
					}
				},
			});
		},
		InstargamSlider: function(){
			var swiper = new Swiper('.blog_instagram_slider .swiper-container', {
				slidesPerView: 6,
				spaceBetween: 20,
				loop: true,
				autoplay: {
					delay: 2000
				},
				touchRatio: 0.1,
				freeMode: true,
				loopedSlides: 6, //looped slides should be the same	
				breakpoints: {
					// when window width is <= 320px
					480: {
							slidesPerView: 1,
						},
					// when window width is <= 480px
					600: {
					  slidesPerView: 2,
					},
					// when window width is <= 640px
					767: {
					  slidesPerView: 3,
					},	
					// when window width is <= 640px
					992: {
					  slidesPerView: 3,
					},	
					1200: {
					  slidesPerView: 5,
					},
					1530: {
					  slidesPerView: 5, 
					}
				},
			});
		},
		CookiesPopup: function(){
			$('.blog_icon').on("click", function(e){
				e.preventDefault();
				$(this).parent().toggleClass('open animation_effect');
				//var _this = $(this);
				//setTimeout(function(){ _this.removeClass('animation_effect'); }, 900);
			});
			$('.cookie_btn').on("click", function(e){
				e.preventDefault();
				$('.blog_cookies_div').hide();
				assect_cookie = 1;
			});
		},
		SinglepageToggle:function(){
			$('.blog_toggleonclick').on('click', function(e){
				e.preventDefault();
				$('.blog_toggleonclick').not($(this).closest('.blog_comment_meta').find('.blog_toggleonclick')).removeClass('menu_open');
                $(this).closest('.blog_comment_meta').find('.blog_toggleonclick').toggleClass('menu_open');
			 });
			$(document).on('click' , function(e){
				if(!$(e.target).closest('.blog_toggleonclick').length){
					$('.blog_toggleonclick').removeClass("menu_open");
				}
			});
		},
		CommentAction: function(){
			$(".blog_comment_action").on('click', function(e) {
				$('ul.comment_action').not($(this).closest('.blog_comment_meta').find('ul.comment_action')).removeClass('open');
                $(this).closest('.blog_comment_meta').find('ul.comment_action').toggleClass('open');
            });
			$(document).on('click' , function(e){
				if(!$(e.target).closest('.blog_comment_action').length){
					$('.comment_action').removeClass("open");
				}
			});

		},
		TestimonialSlider: function(){
			 var galleryThumbs15 = new Swiper('.blog_testimonial_slider .testimonial-thumbs', {
					  spaceBetween: 0,
					  slidesPerView: 3,
					  //centeredSlides: true,
					  initialSlide: 1,
					  loop:false,
					  loopedSlides: 3,
					  freeMode: true,
					  direction:'horizontal',
					  watchSlidesVisibility: true,
					  watchSlidesProgress: true,
				});
				var galleryTop15 = new Swiper('.blog_testimonial_slider .testimonial-top', {
					  spaceBetween: 30,
					  direction:'horizontal',
					  thumbs: {
						swiper: galleryThumbs15
					  }
				});
		},
		ContactFormSubmit: function(){
			if($('#send_btn').length > 0){	
				$("#send_btn").on("click", function() {
					var e = $("#ur_name").val();
					var t = $("#ur_mail").val();
					var ph = $("#ur_phone").val();
					var s = $("#sub").val();
					var r = $("#msg").val();
					$.ajax({
						type: "POST",
						url: "ajaxmail.php",
						data: {
							username: e,
							useremail: t,
							userphone: ph,
							usersub: s,
							mesg: r
						},
						success: function(n) {
							var i = n.split("#");
							if (i[0] == "1") {
								$("#ur_name").val("");
								$("#ur_mail").val("");
								$("#ur_phone").val("");
								$("#sub").val("");
								$("#msg").val("");
								$("#err").html(i[1]);
							} else {
								$("#ur_name").val(e);
								$("#ur_mail").val(t);
								$("#ur_phone").val(ph);
								$("#sub").val(s);
								$("#msg").val(r);
								$("#err").html(i[1]);
							}
						}
					});
				});
			}
		},
		StickySidebar: function(){
			 $('.theiaStickySidebar').theiaStickySidebar({
			additionalMarginTop: 30,
			additionalMarginBottom: 30,
		});
		},
		wow: function(){
			new WOW().init();
		}
    };
    $(document).ready(function() {
        blog.init();
	
    });
    // Preloader Js
    jQuery(window).on('load', function() {
        jQuery("#blog_preloader_box").fadeOut();
		jQuery("#blog_preloader_wrapper").delay(350).fadeOut("slow");
    });
    // Window Scroll
    $(window).scroll(function() {
        var wh = window.innerWidth;
        // //Go to top
		if(assect_cookie == 0){
			if ($(this).scrollTop() >100) {
			$(".blog_cookies_div").show();
			} else {
			$(".blog_cookies_div").hide();
			}
		}
        
		 
		});

})(jQuery); 


/*********************** Home3 Banner BG*********************/
    var swiper = new Swiper('.ub_home_banner_main_section .swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      effect: 'fade',
      speed:1000,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    fadeEffect: {
    crossFade: true
  },
    });
/*********************** Home3 Image Slider*********************/
      var swiper = new Swiper('.ub_home_image_slider_section .swiper-container', {
      spaceBetween: 30,
      slidesPerView: 5,
      speed: 500,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 640px
  800: {
      slidesPerView: 3,
      spaceBetween: 10
    },
       // when window width is >= 640px
  1000: {
      slidesPerView: 3,
      spaceBetween: 30
    },
      1400: {
      slidesPerView: 5,
      spaceBetween: 30
    },
  }
	});

/********************Home3 Responsive hamburger js************************/
const hamburger = document.querySelector(".hamburger");
         const navLinks = document.querySelector(".nav-links");
         const links = document.querySelectorAll(".nav-links li");
         
         hamburger.addEventListener('click', ()=>{
           //Animate Links
            navLinks.classList.toggle("open");
            links.forEach(link => {
                link.classList.toggle("fade");
            });
         
            //Hamburger Animation
            hamburger.classList.toggle("toggle");
         });
/*********************** AOS JS *********************/
AOS.init({
	easing: 'ease-out-back',
	duration: 800,
	delay: 300,
	once: true,
	disable: 'mobile'
  });