// Block name: Tabs
// Dependencies: jquery.easytabs.js
// Docs: https://github.com/JangoSteve/jQuery-EasyTabs
(function(){
	var tabs = $('.js-tabs');

	tabs.easytabs({
		tabActiveClass: "tab__title--active",
		updateHash: false
	});	
})();