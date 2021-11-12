// Block name: Form Contact
// Dependencies: jquery.form-validator.js
// Docs: https://github.com/victorjonsson/jQuery-Form-Validator
(function(){
	var form = $('.js-form-contact');

	if(form.length){
		var submitForm = function ($form) {
			var formURL = $form.attr("action"); // Get the form's action
			var postData = $form.serialize(); // Serialize the form's data
			var successMessage = $('.js-form-contact__modal'); // Select the success modal

			// Submit an AJAX request
			$.ajax({
			    url : formURL,
			    type: "POST",
			    data : postData,
			    success:function() {
			    	// On success clear the data from the inputs
			    	$form.find('input:text, textarea').val(''); 
			    	// Show the success modal for 2 seconds
			    	successMessage.fadeIn().delay(2000).fadeOut();
			    }
			});

			// Prevent form default behavior
			return false;
		};

		// Validate the contact form, if succeeded, call the submitForm function
		$.validate({
	  		form : form,
	  		onSuccess: submitForm,
	  		scrollToTopOnError: false
		});
	}
})();