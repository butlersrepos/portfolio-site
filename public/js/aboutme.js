/**
 * Still looking at my JS? I like namespacing stuff to the page it's relevant to in small webapps.
 */
var AboutMe = {
	attachThoughtsRevealers: function() {
		$( '.thoughtsSection' ).off( 'click' ).on( 'click', function( event ) {
			$( this ).toggleClass( 'active' );
			var $openSymbol = $( this ).find( 'i' );
			$openSymbol.toggleClass( 'fa-plus-square', !$( this ).hasClass( 'active' ) );
			$openSymbol.toggleClass( 'fa-minus-square', $( this ).hasClass( 'active' ) );
		} );
	}
};

$( document ).ready( function() {
	AboutMe.attachThoughtsRevealers();
} );