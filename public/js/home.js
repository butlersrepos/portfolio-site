var EB = EB || {};

EB.Home = {
	bindNavbarButtons   : function bindNavbarButtons() {
		$( '.js-about-me-nav' ).off( 'click' ).on( 'click', function( event ) {
			$.bbq.pushState( '#page=aboutMe' );
		} );

		$( '.js-resume-nav' ).off( 'click' ).on( 'click', function( event ) {
			$.bbq.pushState( '#page=resume' );
		} );

	},
	setupGoogleAnalytics: function setupGoogleAnalytics() {
		(function( i, s, o, g, r, a, m ) {
			i['GoogleAnalyticsObject'] = r;
			i[r] = i[r] || function() {
				(i[r].q = i[r].q || []).push( arguments )
			}, i[r].l = 1 * new Date();
			a = s.createElement( o ),
				m = s.getElementsByTagName( o )[0];
			a.async = 1;
			a.src = g;
			m.parentNode.insertBefore( a, m )
		})( window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga' );

		ga( 'create', 'UA-52973084-1', 'auto' );
		ga( 'send', 'pageview' );
	}
};

$( document ).ready( function() {
	EB.Home.bindNavbarButtons();
	EB.Home.setupGoogleAnalytics();
	EB.PageTransitions.setupHashEvent();
	EB.SmoothMenu.init( $('#top-navigation') );
} );



