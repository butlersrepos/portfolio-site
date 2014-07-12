/**
 * Still looking at my JS? I like namespacing stuff to the page it's relevant to in small webapps.
 */
var AboutMe = {
	attachThoughtsRevealers: function() {
		$( '.thoughtsSection .title, .thoughtsSection .content' ).off( 'click' ).on( 'click', function( event ) {
			if( $( this ).hasClass( 'content' ) ) { $( this ).hide(); }
			$( this ).siblings( '.content' ).toggle();
		} );
	}
};

$( document ).ready( function() {
	AboutMe.attachThoughtsRevealers();
} );