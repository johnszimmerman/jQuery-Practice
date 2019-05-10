
$(document).ready(function() {
	$('.cocktails, .tTreats, .salads, .beverage').hide();
	
	$('.container .fruitFall')
        .css({top: '-300px'})
        .delay(3000)
        .animate({top: '240px'}, 500, 'easeOutBounce');
    

});
