// Block name: Thumb Product
// Dependencies: no dependencies
(function(){
	var products = $('.js-thumb-product');
	
	if(products.length){
		var interval = 6000;
		var activeClass = "thumb-product--active";
		var update = function  () {
			products.eq(Math.floor(Math.random()*products.length)).addClass(activeClass);
			products.eq(Math.floor(Math.random()*products.length)).addClass(activeClass);
		};

		update();

		setInterval(function(){
			products.removeClass(activeClass);
			update();
		}, interval);
	}

})();