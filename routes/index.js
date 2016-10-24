var moment = require('moment');
var resumeJson = require('../src/my-resume');
var express = require('express');
var router = express.Router();

router.get('/', mainPage);
router.get('/home', homePage);
router.get('/aboutme', aboutMePage);
router.get('/resume', resumePage);
router.get('/works', worksPage);
router.get('/api/resume/get', getJsonResume);

module.exports = router;

// Main Start Page
function mainPage(req, res) {
  console.log('Starting!');
  res.render('index.jade');
  console.log(req.host)
}

function homePage(req, res) {
  console.log('Starting!');
  res.render('content/home.jade');
}

// A Short AJAXed Autobiography
function aboutMePage(req, res) {
  console.log('Loading AboutMe...');
  res.render('content/aboutme.jade');
}

// An AJAXed Resume
function resumePage(req, res) {
  console.log('Loading Resume...');
  res.render('content/resume.jade', {resume: resumeJson});
}

// RESTful API Stuff
function getJsonResume(req, res) {
  res.writeHead(200, {"Content-Type": "application/json"});
  res.end(JSON.stringify(resumeJson));
}

// List of github repos etc
function worksPage(req, res) {
  res.render('content/works.jade', {
    moment: moment,
    updated_last: global.repos_updated_last,
    github_repos: global.github_repos,
    bitbucket_repos: global.bitbucket_repos
  });
}
