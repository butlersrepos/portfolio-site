/**
 * Stop looking at my JS man! I don't minify here. Ain't nobody got time for that.
 */
$(document).ready( function() {
	bindNavbarButtons();
	setupGoogleAnalytics();
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

function setupGoogleAnalytics() {
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-52973084-1', 'auto');
	ga('send', 'pageview');
};