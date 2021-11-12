// Block name: Button Search
// Dependencies: no dependencies
(function(){
	var drawer = $('.js-drawer--search');
	var searchTrigger = $('.js-button-search');
	var header = $(".js-header");
	var headerBorder = header.hasClass("header--border");

	searchTrigger.on("click", function (e) {
		drawer.toggleClass('drawer--open');
		searchTrigger.toggleClass('button-search--open');
		if(!headerBorder){ header.toggleClass("header--border"); }

		e.stopPropagation();
	});

	drawer.on("click", function (e) {
		e.stopPropagation();
	});

	$("body").on("click", function () {
		drawer.removeClass('drawer--open');
		searchTrigger.removeClass('button-search--open');
		if(!headerBorder){ header.removeClass('header--border'); }
	});
})();
