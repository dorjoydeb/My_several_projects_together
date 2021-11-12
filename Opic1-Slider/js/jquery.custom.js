/* --------------------------------------------
 READY FUNCTION
-------------------------------------------- */
$(document).ready(function() {
	/* --------------------------------------------
	 SCROLL NAVIGATION
	-------------------------------------------- */	
	$(function() {
		"use strict";
		$('.scroll').bind('click', function(event) {
			var $anchor = $(this);
			var headerH = $('#navigation').outerHeight();
				$('html, body').stop().animate({					
					scrollTop : $($anchor.attr('href')).offset().top - 60 + "px"
				}, 1200, 'easeInOutExpo');
			event.preventDefault();
		});
	});
		
	/* --------------------------------------------
	 ACTIVE NAVIGATION
	-------------------------------------------- */
	$(function() {
		"use strict";
		$('body').scrollspy({ 
			target: '#top',
			offset: 95
		});
	});
		
	/* --------------------------------------------
	 CLOSE COLLAPSE MENU ON MOBILE VIEW
	-------------------------------------------- */
	$(function() {
		"use strict";
		$('.nav li a').click(function () {
			 $('.navbar-collapse').removeClass('in');
		});
	});
		
	/* --------------------------------------------
	 ANIMATED PAGE ON REVEALED
	-------------------------------------------- */
	$(function($) {
		"use strict";
		$('.animated').appear(function() {
			var elem = $(this);
			var animation = elem.data('animation');
			if ( !elem.hasClass('visible') ) {
				var animationDelay = elem.data('animation-delay');
				if ( animationDelay ) {
				
					setTimeout(function(){
					 elem.addClass( animation + " visible" );
					}, animationDelay);
					
				} else {
					elem.addClass( animation + " visible" );
				}
			}
		});
	});
		
	/* --------------------------------------------
	 LOAD MORE 
	-------------------------------------------- */
	$(function() {
		"use strict";
		var loadtext = $('.load-more');
		$(".load-posts").click(function() {
			if($(this).hasClass('disable')) return false;				
			$(this).html('<i class="fa fa-spin fa-spinner"></i> Loading');					
			var $hidden = loadtext.filter(':hidden:first').delay(600);  			
			if (!$hidden.next('.load-more').length) {
				$hidden.fadeIn(500);
				$(this).addClass('disable');
				$(this).fadeTo("slow", 0.23).queue(function(n) {
				 	$(this).html('All Posts Loaded');
				 	n();
				}).fadeTo("slow", 1);					
			} else {
				$hidden.fadeIn(500);
				$(this).fadeTo("slow", 0.23).queue(function(g) {
					$(this).html('Load More Post <i class="flaticon-arrow209">');
					g();
				}).fadeTo("slow", 1);			
			}
		});
	});
		
	/* -------------------------------------------- 
	 BLOG FLEX SLIDER
	-------------------------------------------- */
	$(function() {
		"use strict";
		$(".flexslider1").each(function() {
			$('.flexslider1').flexslider({
				animation: 'fade',
				slideshow: false,
				animationLoop: false,
				controlNav: false
			});
		});
	});
	
	/* --------------------------------------------
	 ANIMATED SKILL BARS
	-------------------------------------------- */
	$(function() {		
		$('.progress-bar').appear(function(){
			datavl = $(this).attr('data-percentage'),
			$(this).animate({ "width" : datavl + "%"}, '200');
		});
	});
	
	/* --------------------------------------------
	 COUNT FACTORS
	-------------------------------------------- */  
	$(function() {
		$(".fact-number").appear(function(){
			$(this).each(function(){
			dataperc = $(this).attr('data-perc'),
				$(this).find('.factor').delay(6000).countTo({
					from: 10,
					to: dataperc,
					speed: 3000,
					refreshInterval: 50,	
				});  
			});
		});
	});
		
	/* --------------------------------------------
	 VIDEO SCRIPT
	-------------------------------------------- */
	$(function() {
		"use strict";
		if ( $( ".player" ).length ) {
			$(".player").mb_YTPlayer();
		}
	});		
});
/* --------------------------------------------
 READY FUNCTION ENDS
-------------------------------------------- */

/* --------------------------------------------
 LOAD FUNCTION
-------------------------------------------- */
$(window).load(function() {

	/* --------------------------------------------
	 PAGE LOADER
	-------------------------------------------- */	
	$(function() {
		"use strict";
		$(".loader-item").delay(700).fadeOut();
		$("#pageloader").delay(800).fadeOut("slow");
	});
	
	/* --------------------------------------------
	 ISOTOPE ANIMATION
	-------------------------------------------- */
	$(function(){
		"use strict";
		if ( $( ".portfolio-container" ).length ) {
			var $container = $('.portfolio-container');
			$container.isotope({
				filter: '*',
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			});
		}		
		$('.portfolio-filter a').click(function(){
			$('.portfolio-filter .current').removeClass('current');
			$(this).addClass('current');
	
			var selector = $(this).attr('data-filter');
			$container.isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			});
		   return false;
		});
	});
	
	/* --------------------------------------------
	 CLIENT 
	-------------------------------------------- */
	$(function() {
		"use strict";
		if ( $( "#flexiselDemo" ).length ) {
			$("#flexiselDemo").flexisel({
				visibleItems: 5,
				animationSpeed: 1000,
				autoPlay: true,
				autoPlaySpeed: 3000,
				pauseOnHover: false,
				enableResponsiveBreakpoints: true,
				responsiveBreakpoints: {
					portrait: {
					changePoint:480,
					visibleItems: 2
					},
					landscape: {
					changePoint:640,
					visibleItems: 2
					},
					tablet: {
					changePoint:768,
					visibleItems: 3
					}
				}
			});
		}
	});
		
	/* --------------------------------------------
 	 CONTACT FORM
	-------------------------------------------- */
	var messageDelay = 2000;
	$(init);
	
	function init() {
	  $('#contactForm').show().submit( submitForm ).addClass( 'positioned' );  
	}
	
	// Submit the form via Ajax
	function submitForm() {
	  var contactForm = $(this);
	
	  // Are all the fields filled in?
	
	  if ( !$('#senderName').val() || !$('#senderEmail').val() || !$('#message').val() ) {
	
		// No; display a warning message and return to the form
		$('#incompleteMessage').fadeIn().delay(messageDelay).fadeOut();
		contactForm.fadeOut().delay(messageDelay).fadeIn();
	
	  } else {
	
		// Yes; submit the form to the PHP script via Ajax
	
		$('#sendingMessage').fadeIn();
		contactForm.show();
	
		$.ajax( {
		  url: contactForm.attr( 'action' ) + "?ajax=true",
		  type: contactForm.attr( 'method' ),
		  data: contactForm.serialize(),
		  success: submitFinished
		} );
	  }
	
	  // Prevent the default form submission occurring
	  return false;
	}
	
	
	// Handle the Ajax response
	function submitFinished( response ) {
	  response = $.trim( response );
	  $('#sendingMessage').fadeOut();
	
	  if ( response == "success" ) {
	
		// Form submitted successfully:
		// 1. Display the success message
		// 2. Clear the form fields
		// 3. Fade the content back in
	
		$('#successMessage').fadeIn().delay(messageDelay).fadeOut();
		$('#senderName').val( "" );
		$('#senderEmail').val( "" );
		$('#message').val( "" );
	
		$('#content').delay(messageDelay+500).fadeTo( 'slow', 1 );
	
	  } else {
	
		// Form submission failed: Display the failure message,
		// then redisplay the form
		$('#failureMessage').fadeIn().delay(messageDelay).fadeOut();
		$('#contactForm').delay(messageDelay+500).fadeIn();
	  }
	}

});
/* --------------------------------------------
 LOAD FUNCTION ENDS
-------------------------------------------- */
(function ($) {
	"use strict";
	$.fn.countTo = function (options) {
		options = options || {};

		return $(this).each(function () {
			// set options for current element
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'),
				to:              $(this).data('to'),
				speed:           $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals:        $(this).data('decimals')
			}, options);

			// how many times to update the value, and how much to increment the value on each update
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;

			// references & variables that will change with each update
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};

			$self.data('countTo', data);

			// if an existing interval can be found, clear it first
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);

			// initialize the element with the starting value
			render(value);

			function updateTimer() {
				value += increment;
				loopCount++;

				render(value);

				if (typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}

				if (loopCount >= loops) {
					// remove the interval
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;

					if (typeof(settings.onComplete) == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}

			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.text(formattedValue);
			}
		});
	};

	$.fn.countTo.defaults = {
		from: 0,               // the number the element should start at
		to: 0,                 // the number the element should end at
		speed: 1000,           // how long it should take to count between the target numbers
		refreshInterval: 100,  // how often the element should be updated
		decimals: 0,           // the number of decimal places to show
		formatter: formatter,  // handler for formatting the value before rendering
		onUpdate: null,        // callback method for every time the element is updated
		onComplete: null       // callback method for when the element finishes updating
	};

	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
}(jQuery));