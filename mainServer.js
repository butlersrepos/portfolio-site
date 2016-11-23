var express = require('express');
var routes = require('./routes/index');
var http = require('http');
var https = require('https');
var path = require('path');
var moment = require('moment');

// Setup EJS wit handlebars like syntax
var app = express();

// all environments
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.use(require('serve-favicon')(__dirname + '/dist/imgs/favicon.ico'));
app.use(require('body-parser').json());
app.use(require('body-parser').urlencoded({extended: false}));
app.use(require('morgan')('dev'));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'views')));

// development only
if ('development' == app.get('env')) {
  app.use(require('errorhandler')());
}

/////////////////////
// Routing Mappers //
/////////////////////
app.use('/', routes);

// To replace this! `echo -n "username:password" | base64`
var bitbucketAuth = 'Basic ZXJpY2J1dGxlcjAwMEBnbWFpbC5jb206MXdkdlpEVCY=';
var repoUpdateInHours = 12;

// Startup Server!app
http.createServer(app).listen(app.get('port'), function() {
  // We are live!
  console.log('Main Server listening on port ' + app.get('port'));
  // One time tasks for new server boot
  runStartupTasks();
  // Reoccuring tasks
  setInterval(function() {
    global.bitbucket_repos = [];
    global.github_repos = [];
    getGithubReposInfo();
    getBitbucketReposInfo();
    global.repos_updated_last = new moment();
  }, 1000 * 60 * 60 * repoUpdateInHours);
});

function runStartupTasks() {
  global.bitbucket_repos = [];
  global.github_repos = [];
  global.repos_updated_last = new moment();
  getGithubReposInfo();
  getBitbucketReposInfo();
}

function getBitbucketReposInfo() {
  // Go get newest bitbucket info for Sarophym account
  getBitbucketPage(1);
}

function getBitbucketPage(page) {
  var opts = {
    host: "bitbucket.org",
    method: 'GET',
    path: "/api/2.0/repositories/sarophym?page=" + page,
    headers: {
      Authorization: bitbucketAuth
    }
  };

  var bitbucketRequest = https.request(opts, function(res) {
    var totalMessage = '';

    res.on('data', (chunk) => {
      totalMessage += chunk;
    }).on('end', () => {
      var body = JSON.parse(totalMessage);
      global.bitbucket_repos = global.bitbucket_repos || [];
      global.bitbucket_repos = global.bitbucket_repos.concat(body.values);

      if (body.next !== undefined) {
        getBitbucketPage(++page);
      }
    });
  }).on('error', function(e) {
    console.log("Bitbucket errored: " + e.message);
  });

  bitbucketRequest.end();
}

function getGithubReposInfo() {
  var opts = {
    host: "api.github.com",
    method: 'GET',
    path: "/users/butlersrepos/repos",
    headers: {
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'butlersrepos'
    }
  };

  var githubRequest = https.request(opts, function(res) {
    var totalMessage = '';

    res.on('data', (chunk) => {
      totalMessage += chunk;
    }).on('end', () => {
      global.github_repos = JSON.parse(totalMessage);
    })
  }).on('error', function(e) {
    console.log("Github errored: " + e.message);
  });

  githubRequest.end();
}
