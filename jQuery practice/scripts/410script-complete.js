
$(document).ready(function() {
	$('.cocktails, .tTreats, .salads, .beverage').hide();
	
	$('.container .fruitFall')
	.show('explode', { pieces: 16 }, 1000)
	.delay(1000)
	.effect('pulsate', {times: 5}, 2000)
	.draggable();

});
