(function($){
	"use strict";


	$('[data-bg-image]').each(function(){
		$(this).css({ 'background-image': 'url('+$(this).data('bg-image')+')' });
	});

	$('[data-bg-color]').each(function(){
		$(this).css({ 'background-color': $(this).data('bg-color') });
	});


	// Menu event handler
	var toggleMenu = function(close_menu){
		$('#header').find('.entry-header').toggleClass('show-menu');
		$('#header').find('.entry-header').slideToggle();

		$('#menu-handler').hide();
		$('#menu-close').hide();
		setTimeout(function(){
			if( close_menu ){ $('#menu-handler').fadeIn(); }
			else{ $('#menu-close').fadeIn(); }
		}, 800);
	};

	$('#menu-handler').on('click', function(){
		toggleMenu(false);

		TweenMax.to($('#curve_open'), 0.4, {attr: {'d': $('#curve_open').data('end-d')}});
		setTimeout(function(){
			$('.header-close').show();
			$('.header-tool').hide();
			TweenMax.to($('#curve_close'), 0.4, {attr: {'d': $('#curve_close').data('end-d')}});
		}, 400);

		
	});

	$('#menu-close').on('click', function(){
		toggleMenu(true);

		TweenMax.to($('#curve_close'), 0.4, {attr: {'d': $('#curve_close').data('start-d')}});
		setTimeout(function(){
			$('.header-close').hide();
			$('.header-tool').show();
			TweenMax.to($('#curve_open'), 0.4, {attr: {'d': $('#curve_open').data('start-d')}});
		}, 400);
		
	});



	// scroll to top
	$('#footer .scroll-top a').on('click', function(){
		$('html, body').stop().animate({
			scrollTop: '0px'
		}, 800);
	});



	// search handler
	$('.section-header .search a').on('click', function(){
		$(this).parent().find('.input-search').focus();
	});


	$(document).ready(function(){

		$('[data-toggle="tooltip"]').tooltip();

		// Curved Chart Element
		$('.tt-el-chart').each(function(){
			var $chart = $(this);

			$chart.waypoint(function(direction) {
				
				$chart.find('svg').each(function(svg_index){
					var $svg = $(this);
					var _percent = parseInt($svg.data('percent'), 10);

					$svg.parent().find('.entry-hover').css('bottom', _percent+'%');

					$svg.find('path').each(function(){
						var $path = $(this);
						var _path = $path.data('end-d');
						$path.css('fill', $path.attr('fill') );
						_path = _path.replace(/XX/gi, 500-500*_percent/100);
						TweenMax.to($path, 0.5+svg_index*0.15, {attr: {'d': _path}});
					});
				});

				$chart.addClass('showed');
				
			},{
				triggerOnce: true,
				offset: '90%'
			});
			
		});
		

	});

	
	
	$(window).load(function(){
		
		
		$('.blog-grid').each(function(){
			var $grid = $(this);
			$grid.isotope({
				itemSelector: '.blog-item',
				masonry: {
					columnWidth: 1
				}
			});
		});


		$('.portfolio-grid').each(function(){
			var $folio = $(this);

			$folio.find('.entry-portfolio').isotope({
				itemSelector: '.folio-item',
				masonry: {
					columnWidth: 1
				}
			});

			$folio.find('.entry-filter a').on('click', function(){
				$folio.find('.entry-filter a.active').removeClass('active');
				$(this).addClass('active');
				var _filter = $(this).data('filter');
				$folio.find('.entry-portfolio').isotope({ filter:_filter });
			});

		});

	});


})(jQuery);