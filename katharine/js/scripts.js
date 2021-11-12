(function($){
	"use strict";


	$('[data-bg-image]').each(function(){
		$(this).css({ 'background-image': 'url('+$(this).data('bg-image')+')' });
	});

	$('[data-bg-color]').each(function(){
		$(this).css({ 'background-color': $(this).data('bg-color') });
	});

	$('[data-width]').each(function(){
		$(this).css({ 'width': $(this).data('width') });
	});

	$('[data-height]').each(function(){
		$(this).css({ 'height': $(this).data('height') });
	});



	// header search action
	$('#header-search').on('click', function(){
		$('#overlay-search').addClass('active');

		setTimeout(function(){
			$('#overlay-search').find('input').eq(0).focus();
		}, 400);
	});
	$('#overlay-search').find('.close-search').on('click', function(){
		$('#overlay-search').removeClass('active');
	});


	// mobile menu
	$('nav.main-nav').on('click', function(){
		if( $(window).width()<997 ){
			$('nav.main-nav').addClass('show-menu');
		}
	});
	$('#close-menu').on('click', function(){
		$('nav.main-nav.show-menu').removeClass('show-menu');
		return false;
	});


	$(document).ready(function(){


		// Gallery slideshow
		$('.gallery-slideshow').each(function(){
			var _gallery = $(this);

			_gallery.find('.gallery-container').swiper({
			    nextButton: _gallery.find('.swiper-button-next'),
			    prevButton: _gallery.find('.swiper-button-prev')
			});
		});


		// Video Element
		$('.video-element').each(function(){
			var _video = $(this);
			_video.magnificPopup({
				delegate: 'a',
				type: 'iframe'
			});
		});

		
		$('.image-link').each(function(){
			var $this = $(this);
			$this.magnificPopup({
				type:'image'
			});
		});


		// carousel slider
		$('.carousel-posts').each(function(){
			var $this = $(this);
			$this.find('.swiper-container').swiper({
				loop: true,
				slidesPerView: 3,
				centeredSlides: true,
				initialSlide: 1,
				nextButton: $this.find('.swiper-button-next'),
			    prevButton: $this.find('.swiper-button-prev'),
			    breakpoints: {
			    	996: {
			    		slidesPerView: 2
			    	}
			    }
			});
		});


		// fullwidth post slider
		$('.fullwidth-post-slider').each(function(){
			var $this = $(this);
			$this.find('.swiper-container').swiper({
				nextButton: $this.find('.swiper-button-next'),
			    prevButton: $this.find('.swiper-button-prev'),
			    pagination: $this.find('.swiper-pagination'),
			    paginationClickable: true
			});
		});


		// katharine-post-slider
		$('.katharine-post-slider').each(function(){
			var $this = $(this);
			$this.find('.swiper-container').swiper({
				nextButton: $this.find('.swiper-button-next'),
			    prevButton: $this.find('.swiper-button-prev'),
			    pagination: $this.find('.swiper-pagination'),
			    paginationClickable: true
			});
		});

	});


	$(window).load(function(){

		$('.gallery-masonry').each(function(){
			var $this = $(this);

			$this.find('.gallery-viewport').isotope({
				itemSelector: '.gitem',
				masonry: {
                    columnWidth: 1
                }
			});

			$this.find('.gallery-viewport').magnificPopup({
				delegate: '.gitem a',
				type: 'image',
				gallery:{
					enabled:true
				}
			});

		});


		$('.blog-masonry-container').each(function(){
			var $this = $(this);
			$this.isotope({
				itemSelector: '.masonry-item',
				masonry: {
                    columnWidth: 1
                }
			});
		});

	});


})(jQuery);