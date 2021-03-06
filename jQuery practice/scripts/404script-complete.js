
$(document).ready(function() {
	$('.cocktails, .tTreats, .salads, .beverage').hide();
	
	$('#btnCocktails').click(function() {
		$('.mainContent, .tTreats, .salads, .beverage').slideUp();
		$('.cocktails').slideToggle('slow');
	});
	
	$('#btnTreats').click(function() {
		$('.mainContent, .cocktails, .salads, .beverage').slideUp();
		$('.tTreats').slideToggle('slow');
	});
	
	$('#btnSalads').click(function() {
		$('.mainContent, .cocktails, .tTreats, .beverage').slideUp();
		$('.salads').slideToggle('slow');
	});
	
	$('#btnBeverage').click(function() {
		$('.mainContent, .cocktails, .tTreats, .salads').slideUp();
		$('.beverage').slideToggle('slow');
	});
	
	$('.nav li').hover(function() {
		$(this).addClass('navHover');
	}, function() {
		$(this).removeClass('navHover');
	});
});
