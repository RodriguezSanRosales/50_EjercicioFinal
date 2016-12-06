$(document).ready( function(){
	console.log('documentom listo');

	$('.js-menu').hide();

});

$('.js-show-recipe').click(function() {

	$('body div').removeClass('make');	
	
});

$('.js-show-make').click(function() {
	$('body div').addClass('make');
	
});