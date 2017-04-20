var moment = require('moment');
var resumeJson = require('../src/my-resume');
var express = require('express');
var router = express.Router();


router.get('/restaurant/hours', function (req, res) {
	res.redirect('https://s3.us-east-2.amazonaws.com/restaurant.ericbutler.info/hours.json');
});

router.get('/api/resume', getJsonResume);
router.get('/api/githubs', getGithubs);
router.get('/api/bitbuckets', getBitbuckets);
router.get('/api/repos/lastupdate', getLastRepoUpdateTime);

router.get('/', (req, res) => {
	res.render('index.html');
});

router.get('/browserdemons', function (req, res) {
	res.redirect('http://ericbutler.info:8080');
});

module.exports = router;

// RESTful API Stuff
function getJsonResume(req, res) {
	res.writeHead(200, { "Content-Type": "application/json" });
	res.end(JSON.stringify(resumeJson));
}

function getGithubs(req, res) {
	res.writeHead(200, { "Content-Type": "application/json" });
	res.end(JSON.stringify(global.github_repos));
}

function getBitbuckets(req, res) {
	res.writeHead(200, { "Content-Type": "application/json" });
	res.end(JSON.stringify(global.bitbucket_repos));
}

function getLastRepoUpdateTime(req, res) {
	res.end(JSON.stringify(global.repos_updated_last));
}