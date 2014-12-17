var EB = EB || {};

EB.PageTransitions = {
	setupHashEvent: function() {
		$( window ).bind( 'hashchange', function( e ) {
			var url = $.bbq.getState()['page'];
			if( url != null ) {
				$.ajax( {
					url     : url,
					dataType: 'html',
					success : function( data, jQXHR ) {
						$( '#main-content' ).html( data );
					}
				} );
			}
		} );

		$( window ).trigger( 'hashchange' );
	}
};

