/**
 * Stop looking at my JS man! I don't minify here. Ain't nobody got time for that.
 */
$(document).ready( function() {
	bindNavbarButtons();
});

/**
 * Global namespace, like a boss?
 */
function bindNavbarButtons() {
	$('#aboutMeButton').off('click');
	$('#aboutMeButton').on('click', function(event) {
		$.bbq.pushState('#page=aboutMe');
	});
	
	$('#resumeButton').off('click');
	$('#resumeButton').on('click', function(event) {
		$.bbq.pushState('#page=resume');
	});
};