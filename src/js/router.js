export default function () {
	route('', () => riot.mount('main', 'about-me'));

	route('aboutme', () => riot.mount('main', 'about-me'));

	route('works', () => riot.mount('main', 'works-page'));

	route('resume', function () {
		$.ajax('/api/resume/get').then(function (resume) {
			riot.mount('main', 'resume', resume);
		});
	});

	route.start(true);
}