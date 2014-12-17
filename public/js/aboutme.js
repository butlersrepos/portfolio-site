var EB = EB || {};

EB.AboutMe = {
	attachThoughtsRevealers: function attachThoughtsRevealers() {
		$( '.thoughts-section' ).off( 'click' ).on( 'click', function( event ) {
			$( this ).toggleClass( 'active' );
			var openSymbol = $( this ).find( 'i' );
			openSymbol.toggleClass( 'fa-plus-square', !$( this ).hasClass( 'active' ) );
			openSymbol.toggleClass( 'fa-minus-square', $( this ).hasClass( 'active' ) );
		} );
	}
};

$( document ).ready( function() {
	EB.AboutMe.attachThoughtsRevealers();
} );