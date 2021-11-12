// Block name: Preloader
// Dependencies: no dependencies
(function(){
	var preloader = $('.js-preloader');
	var preload = $('.js-preload-me').length;

	// Check if the preloader is active
	if(preload){
		$(window).on("load", function () {
			preloader.fadeOut('slow',function () {
				$(this).remove();
			});
		});
	}
})();