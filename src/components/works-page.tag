works-page#works
    repo-report(title="Github Projects", repos="{ this.github_repos }")
    repo-report(title="Bitbucket Projects", repos="{ bitbucket_repos }")
    .repo-updated-last
        | Repos retrieved: { moment(updated_last).format("h:mma MMM Do, YYYY") }
    
    script.
        this.on('mount', function() {
            var self = this;
            $.ajax('/api/githubs').then(function(githubs) {
                self.github_repos = githubs;
                self.update();
            });
        });