// Block name: Button Menu
// Dependencies: no dependencies
(function(){
	var button = $(".js-button-menu");
	var body = $("body");
	var drawer = $(".js-drawer--tablet, .js-drawer--mobile");

	button.on("click", function () {
		drawer.toggleClass("drawer--open");
		return false;
	});

	drawer.on("click", function (e) {
		e.stopPropagation();
	});

	body.on("click", function () {
		drawer.removeClass("drawer--open");
	});

})();