$(document).ready( function() {
	$('#startTerrariaButton').on( 'click', function(event) {
		$.ajax({
			url: 'startTerraria.ajax'
		});
	});
	$('#stopTerrariaButton').on( 'click', function(event) {
		$.ajax({
			url: 'stopTerraria.ajax'
		});
	});
});