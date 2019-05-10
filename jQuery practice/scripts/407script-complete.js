
$(document).ready(function() {
	
	$('#btnCocktails').hover(function() {
		$('.imgHolder').animate({ marginLeft: '+=400px'}, 500);
	}, function() {
		$('.imgHolder').animate({ marginLeft: '-=400px'}, 500);
	});
	

});
