$(document).ready( function() {
	bindNavbarButtons();
	setTimeout('slideInStart()', 1000);
});

function bindNavbarButtons() {
	$('.menuLink').button();
	
	$('#aboutMeButton').off('click');
	$('#aboutMeButton').on('click', function(event) {
		$.bbq.pushState('#page=aboutMe');
	});
	
	$('#resumeButton').off('click');
	$('#resumeButton').on('click', function(event) {
		$.bbq.pushState('#page=resume');
	});
	
	$('#examplesButton').off('click');
	$('#examplesButton').on('click', function(event) {
		$.bbq.pushState('#page=examples');
	});
	
	$('#recreationButton').off('click');
	$('#recreationButton').on('click', function(event) {
		$.bbq.pushState('#page=recreations');
	});
};

function slideInStart() {
	slideInButtons();
};
