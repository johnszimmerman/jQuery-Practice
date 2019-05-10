

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
		 
	$('ul.nav li').hover(function() {
		$(this).animate({backgroundColor: '#F18F48'}, 500);
	}, function() {
		$(this).animate({backgroundColor: '#Fc3'}, 500);
	});
	
	$('#btnCocktails').toggle(
	function() {
		$('.cocktails h2').delay(1000).animate({backgroundColor: '#A00', color: '#fff', width: 600}, 1000);
		$('.cocktails p:first strong').delay(1000).animate({backgroundColor: '#ffff9c'}, 1500).delay(1000).animate({backgroundColor:'#fff'}, 1500);
	},
		function() {
			$('.cocktails h2').animate({backgroundColor: '#fff', color: '#b0b848'}, 500);
			$('.cocktails p:first strong').delay(1000).animate({backgroundColor: '#fff'}, 750);
});

});
