// Block name: Gallery
// Dependencies: jquery.lightslider.js
// Docs: https://github.com/sachinchoolur/lightslider
(function(){

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