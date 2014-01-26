var isContentIn = false;

$(document).ready( function() {
	setupHashEvent();
});

function setupHashEvent() {
	$(window).bind( 'hashchange', function(e) {
		var url = $.bbq.getState()['page'];
		if( url != null ) {
			$.ajax({
				url: url+'.action',
				dataType: 'html',
				success: function(data, jQXHR) {
					$('#contentDiv').animate({'left':$(window).width()}, 1000, 'easeInCubic').hide( '', '', function() {
						$('#contentDiv').html( data ).show().animate({'left':'12em'}, 1000, 'easeOutCubic');
					});
				}
			});
		}
	});
	
	$(window).trigger( 'hashchange' );
};

function slideInButtons() {
	$('.menuLink').each( function(index, val) {
		$(this).delay(index*250).animate({'left':'0em'}, 500);
	});
};

function slideOutButtons() {
	$('.menuLink').each( function(index, val) {
		$(this).delay(index*250).animate({'left':'-20em'}, 500);
	});
};

function slideInContent(waitForPreviousSlide) {
	if( waitForPreviousSlide ) {
		while( isContentIn ) {};
	}
	$('#contentDiv').stop(false, false);
	$('#contentDiv').delay(250).show().animate({'left':'12em'}, 1000, 'easeOutCubic');
	isContentIn = true;
};

function slideOutContent(waitForPreviousSlide) {
	if( waitForPreviousSlide ) {
		while( !isContentIn ) {};
	}
	$('#contentDiv').stop(false, false);
	$('#contentDiv').animate({'left':$(window).width()}, 1500, 'easeInCubic').hide();
	isContentIn = false;
};