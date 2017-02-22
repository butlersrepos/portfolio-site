export default function () {
	route('', () => riot.mount('main', 'about-me'));

	route('aboutme', () => riot.mount('main', 'about-me'));
	route('posts', () => riot.mount('main', 'posts-page'));
	route('works', () => riot.mount('main', 'works-page'));
	route('experiments', () => riot.mount('main', 'experiments-page'));
	route('restaurant-template', () => riot.mount('main', 'restaurant-page'));
	
	route('resume', function () {
		fetch('/api/resume/get')
			.then(resp => resp.json())
			.then(function (resume) {
				riot.mount('main', 'resume', resume);
			});
	});

	route.start(true);
}