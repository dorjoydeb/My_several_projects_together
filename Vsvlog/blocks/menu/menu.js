// Block name: Menu
// Dependencies: jquery.hoverIntent.js jquery.superfish.js
// Docs: https://github.com/joeldbirch/superfish
(function(){
	var menu = $('.js-menu');

	menu.superfish({
		delay: 300,
	    autoArrows: false,
	    speed: 'fast',
	    disableHI: true
	});

})();