/* jshint undef: true, unused: true, browser: true, strict: true */
/* global jQuery, Wallop */

(function($) {
	"use strict";

	// Block name: Video Modal
	// Dependencies: jquery.youtubepopup.js
	// Docs: https://github.com/QassimHassan/YouTube_PopUp
	(function() {
		var videos = $(".js-modal-video");
		videos.YouTubePopUp();
	})();
	// Block name: Button Menu
	// Dependencies: no dependencies
	(function() {
		var button = $(".js-button-menu");
		var body = $("body");
		var drawer = $(".js-drawer--tablet, .js-drawer--mobile");

		button.on("click", function() {
			drawer.toggleClass("drawer--open");
			return false;
		});

		drawer.on("click", function(e) {
			e.stopPropagation();
		});

		body.on("click", function() {
			drawer.removeClass("drawer--open");
		});

	})();
	// Block name: Button Search
	// Dependencies: no dependencies
	(function() {
		var drawer = $('.js-drawer--search');
		var searchTrigger = $('.js-button-search');
		var header = $(".js-header");
		var headerBorder = header.hasClass("header--border");

		searchTrigger.on("click", function(e) {
			drawer.toggleClass('drawer--open');
			searchTrigger.toggleClass('button-search--open');
			if (!headerBorder) {
				header.toggleClass("header--border");
			}

			e.stopPropagation();
		});

		drawer.on("click", function(e) {
			e.stopPropagation();
		});

		$("body").on("click", function() {
			drawer.removeClass('drawer--open');
			searchTrigger.removeClass('button-search--open');
			if (!headerBorder) {
				header.removeClass('header--border');
			}
		});
	})();

	// Block name: Form Contact
	// Dependencies: jquery.form-validator.js
	// Docs: https://github.com/victorjonsson/jQuery-Form-Validator
	(function() {
		var form = $('.js-form-contact');

		if (form.length) {
			var submitForm = function($form) {
				var formURL = $form.attr("action"); // Get the form's action
				var postData = $form.serialize(); // Serialize the form's data
				var successMessage = $('.js-form-contact__modal'); // Select the success modal

				// Submit an AJAX request
				$.ajax({
					url: formURL,
					type: "POST",
					data: postData,
					success: function() {
						// On success clear the data from the inputs
						$form.find('input:text, textarea').val('');
						// Show the success modal for 2 seconds
						successMessage.fadeIn().delay(2000).fadeOut();
					}
				});

				// Prevent form default behavior
				return false;
			};

			// Validate the contact form, if succeeded, call the submitForm function
			$.validate({
				form: form,
				onSuccess: submitForm,
				scrollToTopOnError: false
			});
		}
	})();
	// Block name: Gallery
	// Dependencies: jquery.lightslider.js
	// Docs: https://github.com/sachinchoolur/lightslider
	(function() {

		$(".js-gallery").lightSlider({
			gallery: true,
			item: 1,
			controls: false,
			addClass: "gallery__holder",
			vertical: true,
			adaptiveHeight: true,
			loop: true,
			thumbItem: 4
		});

	})();
	// Block name: Menu
	// Dependencies: jquery.hoverIntent.js jquery.superfish.js
	// Docs: https://github.com/joeldbirch/superfish
	(function() {
		var menu = $('.js-menu');

		menu.superfish({
			delay: 300,
			autoArrows: false,
			speed: 'fast',
			disableHI: true
		});

	})();
	// Block name: Menu Mobile
	// Dependencies: jquery.slinky.js
	// Docs: https://github.com/alizahid/slinky/
	(function() {
		$(".js-menu-mobile").slinky();
	})();
	// Block name: Preloader
	// Dependencies: no dependencies
	(function() {
		var preloader = $('.js-preloader');
		var preload = $('.js-preload-me').length;

		// Check if the preloader is active
		if (preload) {
			$(window).on("load", function() {
				preloader.fadeOut('slow', function() {
					$(this).remove();
				});
			});
		}
	})();
	// Block name: Slider
	// Dependencies: wallop.js, velocity.js
	// Docs: https://github.com/peduarte/wallop
	// https://github.com/julianshapiro/velocity
	(function() {
		var sliders = $('.js-slider');

		sliders.each(function() {
			var slider = $(this);
			var wallop = new Wallop(slider[0], {
				buttonPreviousClass: 'slider__nav-btn--prev',
				buttonNextClass: 'slider__nav-btn--next'
			});

			var updateNavigation = function() {
				var slides = slider.find('.js-slider-item');
				var slideActive = slider.find('.js-slider-item.Wallop-item--current');
				var slidePrev = slideActive.prev().length ? slideActive.prev() : slides.last();
				var slideNext = slideActive.next().length ? slideActive.next() : slides.first();
				var navPrev = slider.find('.js-slider-prev');
				var navNext = slider.find('.js-slider-next');

				navPrev.css('background-image', 'url(' + slidePrev.find(".js-slider-image").attr("src") + ')');
				navNext.css('background-image', 'url(' + slideNext.find(".js-slider-image").attr("src") + ')');
			};

			var animateContent = function(indexCurrent) {
				var slideNext = slider.find('.js-slider-item').eq(indexCurrent);
				var slideCurrent = slider.find('.js-slider-item.Wallop-item--hidePrevious');

				slideNext.find('.js-slider-animated').velocity("stop").velocity("transition.slideDownIn", {
					stagger: 250,
					duration: 1500,
					display: null
				});
				slideCurrent.find('.js-slider-animated').velocity("stop").velocity("transition.slideDownOut", {
					duration: 1500,
					display: null
				});
			};

			wallop.on('change', function(event) {
				updateNavigation();
				animateContent(event.detail.currentItemIndex);
			});
		});
	})();
	// Block name: Stats
	// Dependencies: jquery.animateNumber.js, jquery.inview.js
	// Docs: 
	// https://github.com/aishek/jquery-animateNumber
	// https://github.com/protonet/jquery.inview
	(function() {
		var numbers = $('.js-animate-number');

		numbers.each(function() {
			var number = $(this);
			var to = number.data('number');

			number.one("inview", function() {
				number.animateNumber({
					number: to,
					numberStep: $.animateNumber.numberStepFactories.separator('.')
				}, 3000);
			});
		});
	})();
	// Block name: Tabs
	// Dependencies: jquery.easytabs.js
	// Docs: https://github.com/JangoSteve/jQuery-EasyTabs
	(function() {
		var tabs = $('.js-tabs');

		tabs.easytabs({
			tabActiveClass: "tab__title--active",
			updateHash: false
		});
	})();
	// Block name: Thumb Product
	// Dependencies: no dependencies
	(function() {
		var products = $('.js-thumb-product');

		if (products.length) {
			var interval = 6000;
			var activeClass = "thumb-product--active";
			var update = function() {
				products.eq(Math.floor(Math.random() * products.length)).addClass(activeClass);
				products.eq(Math.floor(Math.random() * products.length)).addClass(activeClass);
			};

			update();

			setInterval(function() {
				products.removeClass(activeClass);
				update();
			}, interval);
		}

	})();
	// Block name: Video
	// Dependencies: jquery.fitvids.js
	// Docs: https://github.com/davatron5000/FitVids.js
	(function() {
		$("body").fitVids();
	})();

})(jQuery);