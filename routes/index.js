var moment = require('moment');
var resumeJson = require('../private/my-resume');
var express = require('express');
var router = express.Router();

function homePage(req, res) {
	console.log('Starting!');
	res.render('home.jade');
	console.log(req.host)
}

function aboutMePage(req, res) {
	console.log('Loading AboutMe...');
	res.render('content/aboutme.jade');
}

function resumePage(req, res) {
	console.log('Loading Resume...');
	res.render('content/resume.jade', {resume: resumeJson});
}

function getJsonResume(req, res) {
	res.writeHead(200, {"Content-Type": "application/json"});
	res.end(JSON.stringify(resumeJson));
}

function worksPage(req, res) {
	res.render('content/works.jade', {
		moment         : moment,
		updated_last   : global.repos_updated_last,
		github_repos   : global.github_repos,
		bitbucket_repos: global.bitbucket_repos
	});
}

router.get('/', homePage);
router.get('/aboutme', aboutMePage);
router.get('/resume', resumePage);
router.get('/works', worksPage);
router.get('/api/resume/get', getJsonResume);

router.get('/amys', function(req, res) {
	res.render('content/amys.jade');
});

module.exports = router;