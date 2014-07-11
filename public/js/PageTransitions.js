var isContentIn = false;

var PageTransitions = {
	slideInButtons: function() {
		$('.menuLink').each( function(index, val) {
			$(this).delay(index*250).animate({'left':'0em'}, 500);
		});
	},
	slideOutButtons: function() {
		$('.menuLink').each( function(index, val) {
			$(this).delay(index*250).animate({'left':'-20em'}, 500);
		});
	},
	slideInContent: function(waitForPreviousSlide) {
		if( waitForPreviousSlide ) {
			while( isContentIn ) {};
		}
		$('#contentDiv').stop(false, false);
		$('#contentDiv').delay(250).show().animate({'left':'12em'}, 1000, 'easeOutCubic');
		isContentIn = true;
	},
	slideOutContent: function(waitForPreviousSlide) {
		if( waitForPreviousSlide ) {
			while( !isContentIn ) {};
		}
		$('#contentDiv').stop(false, false);
		$('#contentDiv').animate({'left':$(window).width()}, 1500, 'easeInCubic').hide();
		isContentIn = false;
	},
	setupHashEvent: function() {
		$(window).bind( 'hashchange', function(e) {
			var url = $.bbq.getState()['page'];
			if( url != null ) {
				$.ajax({
					url: url+'.action',
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


