$(document).ready(function() {
	$("#rfi_main").validate({
		errorClass: "invalid",
		rules: {
			first_name: "required",
			last_name: "required",
			email: {
				required: true,
				email: true
			},
			phone: "required"
		},
		submitHandler: function(form) {
			$('#how').val($('#how').val() + g.utm_source);
			// submit url for the form. Ringlead is a service that looks for duplicates and sorts them out before they get to salesforce.
			$('form#rfi_main').attr('action', 'https://salesforce.ringlead.com/cgi-bin/3148/1/dedup.pl');
			// replace code to remove the form and replace it with a message
			$('#rfi_main').fadeOut('fast');
			var text = "<h2>Thank You!</h2><p>Your information has been submitted and we will contact you shortly.";
			$('#wrapper_rfi_main').html(text).addClass('thankyou');
		},
		errorPlacement: function(error, element) {
		    $('#rfi_main-message').html('<span style="color:#ee5356;">Please fill in all required fields.</span>');
		}		
	});
});

function scroll_to(clicked_link, nav_height) {
	var element_class = clicked_link.attr('href').replace('#', '.');
	var scroll_to = 0;
	if(element_class != '.top-content') {
		element_class += '-container';
		scroll_to = $(element_class).offset().top - nav_height;
	}
	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 1000);
	}
}


jQuery(document).ready(function() {
	
	/*
	    Navigation
	*/
	$('a.scroll-link').on('click', function(e) {
		e.preventDefault();
		scroll_to($(this), 0);
	});	
	
    /*
        Background slideshow
    */
    $('.top-content').backstretch("assets/img/backgrounds/1.jpg", {
    	centeredY: false
    });
    $('.call-to-action-container').backstretch("assets/img/backgrounds/community-college.jpg", {
    	centeredY: false
    });
    
    $('#top-navbar-1').on('shown.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    });
    $('#top-navbar-1').on('hidden.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    });
    
    /*
        Wow
    */
    new WOW().init();
    
	/*
	    Modals
	*/
	$('.launch-modal').on('click', function(e){
		e.preventDefault();
		$( '#' + $(this).data('modal-id') ).modal();
	});

	$(function() {
	    $('.features-box').matchHeight();
	});
	
});


jQuery(window).load(function() {
	
	/*
		Loader
	*/
	$(".loader-img").fadeOut();
	$(".loader").delay(1000).fadeOut("slow");
	
	/*
		Hidden images
	*/
	$(".modal-body img, .testimonial-image img").attr("style", "width: auto !important; height: auto !important;");
	
});

