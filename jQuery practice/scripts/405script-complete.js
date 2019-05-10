
$(document).ready(function() {
	$('.cocktails, .tTreats, .salads, .beverage').hide();
	
	$('#btnCocktails').click(function() {
		$('.mainContent').fadeOut(1200, function() {
			alert("the content is now hidden");
   });
 });
});
