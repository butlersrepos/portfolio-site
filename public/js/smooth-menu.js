var EB = EB || {};

EB.SmoothMenu = {
	parentElement: null,
	menuOptions  : null,
	menuCover    : null,
	init         : function init( joParentNavEle ) {
		EB.SmoothMenu.parentElement = joParentNavEle;
		EB.SmoothMenu.menuCover = joParentNavEle.find( '.menu-cover' );
		EB.SmoothMenu.menuOptions = joParentNavEle.find( '.menu-option' );
		EB.SmoothMenu.attachEvents();
	},
	attachEvents : function attachEvents() {
		EB.SmoothMenu.menuCover.on( 'click', function( event ) {
			$( '#top-navigation' ).toggleClass( 'inactive active' );
		} )

		EB.SmoothMenu.menuOptions.on('click', function(event) {
			$( '#top-navigation' ).toggleClass( 'inactive active' );
		});
	}
};