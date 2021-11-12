// Block name: Stats
// Dependencies: jquery.animateNumber.js, jquery.inview.js
// Docs: 
// https://github.com/aishek/jquery-animateNumber
// https://github.com/protonet/jquery.inview
(function(){
	var numbers = $('.js-animate-number');

	numbers.each(function () {
		var number = $(this);
		var to = number.data('number');

		number.one("inview",function () {
			number.animateNumber({
				number: to,
				numberStep: $.animateNumber.numberStepFactories.separator('.')
			}, 3000);
		});
	});
})();