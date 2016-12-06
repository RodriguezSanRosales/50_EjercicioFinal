$(document).ready( function(){
	console.log('documentom listo');

	$('.js-menu').hide();

});

$('.js-show-recipe').click(function() {

	$('body div').removeClass('make');

	$('.js-show-recipe').addClass('active');
	$('.js-show-make').removeClass('active');	
	
});

$('.js-show-make').click(function() {

	$('body div').addClass('make');

	$('.js-show-make').addClass('active');
	$('.js-show-recipe').removeClass('active');	
	
});