// Block name: Slider
// Dependencies: wallop.js, velocity.js
// Docs: https://github.com/peduarte/wallop
// https://github.com/julianshapiro/velocity
(function(){
	var sliders = $('.js-slider');

	sliders.each(function () {
		var slider = $(this);
		var wallop = new Wallop(slider[0], {
			buttonPreviousClass: 'slider__nav-btn--prev',
			buttonNextClass: 'slider__nav-btn--next'
		});

		var updateNavigation = function () {
			var slides = slider.find('.js-slider-item');
			var slideActive = slider.find('.js-slider-item.Wallop-item--current');
			var slidePrev = slideActive.prev().length ? slideActive.prev() : slides.last();
			var slideNext = slideActive.next().length ? slideActive.next() : slides.first();
			var navPrev = slider.find('.js-slider-prev');
			var navNext = slider.find('.js-slider-next');

			navPrev.css('background-image','url('+ slidePrev.find(".js-slider-image").attr("src") +')');
			navNext.css('background-image','url('+ slideNext.find(".js-slider-image").attr("src") +')');
		};

		var animateContent = function (indexCurrent) {
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

		wallop.on('change', function (event) {
			updateNavigation();
			animateContent(event.detail.currentItemIndex);
		});
	});
})();