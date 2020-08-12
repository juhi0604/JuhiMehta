$(document).ready(function(){
	$('.menu-toggler').on('click', function(){
		$(this).toggleClass('open');
		$('.top-nav').toggleClass('open');	
	});
	$('.top-nav .nav-link').on('click', function(){
		$('.menu-toggler').removeClass('open');
		$('.top-nav').removeClass('open');
	});
	$('nav a[href*="#"]').on('click', function(){
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top-10
		}, 2000);
	});
	$('#up').on('click', function(){
		$('html, body').animate({
			scrollTop: "0"
		}, 2000);
	});
	$(".ignore").on('click', function(){
		$(".popup-main").remove();
	});
	AOS.init({
		duration: 1800,
		once: true,
		easing: 'ease'
	});
	AOS.init({
  		disable: function() {
    	var maxWidth = 800;
    	return window.innerWidth < maxWidth;
  		}
	});
});
setTimeout(function(){
	$('.loader-bg').fadeToggle();
}, 2000);
       