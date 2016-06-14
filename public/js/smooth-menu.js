var EB = EB || {};

EB.SmoothMenu = {
	parentElement: null,
	menuOptions  : null,
	menuCover    : null,
	init         : function init( parentNavElement ) {
		EB.SmoothMenu.parentElement = parentNavElement;
		EB.SmoothMenu.menuCover = parentNavElement.find( '.menu-cover' );
		EB.SmoothMenu.menuOptions = parentNavElement.find( '.menu-option' );
		EB.SmoothMenu.attachEvents();
	},
	attachEvents : function attachEvents() {
		EB.SmoothMenu.menuCover.on( 'click', function( event ) {
			$( '#top-navigation' ).toggleClass( 'inactive active' );
		} );

		EB.SmoothMenu.menuOptions.on('click', function(event) {
			$( '#top-navigation' ).toggleClass( 'inactive active' );
		});
	}
};