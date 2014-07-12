/**
 * This file follows a different design pattern than start.js
 */

var PageTransitions = {
	setupHashEvent: function() {
		$(window).bind( 'hashchange', function(e) {
			var url = $.bbq.getState()['page'];
			if( url != null ) {
				$.ajax({
					url: url,
					dataType: 'html',
					success: function(data, jQXHR) {
						$('#contentDiv').html( data );
					}
				});
			}
		});

		$(window).trigger( 'hashchange' );
	}
};

$(document).ready( function() {
	PageTransitions.setupHashEvent();
});


