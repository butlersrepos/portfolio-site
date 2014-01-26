$(document).ready( function() {
	$('#gamesPortal').on( 'click', function(event) {
		$.bbq.pushState('#page=terrariaHome');
	});
});