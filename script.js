$(document).ready(function(){

	$('button').click(function() {
		var firstName = $("input[name*='first-name']").val();
		var lastName = $("input[name*='last-name']").val();
		var email = $("input[name*='email-address']").val();
		var contact = $("input[name*='contact']").val();
		$('#first_name').append(firstName);
		$('#last_name').append(lastName);
		$('#email').append(email);
		$('#contact').append(contact);
	});

});