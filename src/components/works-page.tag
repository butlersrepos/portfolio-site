<works-page id="works">
	<github-repo name="githubs" repos="{ github_repos }"></github-repo>
	<bitbucket-repo name="bitbuckets" repos="{ bitbucket_repos }"></bitbucket-repo>
	<div class="repo-updated-last">Repos retrieved: { moment(updated_last).format("h:mma MMM Do, YYYY") }</div>

	<script>
        this.on('mount', () => {
           this.updateGithubRepos();
		   this.updateBitbucketRepos();
        });

		updateGithubRepos() {
			$.ajax('/api/githubs').then(githubs => {
                this.github_repos = githubs;
                this.update();
            });
		}

		updateBitbucketRepos() {
			$.ajax('/api/bitbuckets').then( bitbuckets => {
				this.bitbucket_repos = bitbuckets;
				this.update();
			});
		}
    </script>

	<style scoped type="scss">
		@import 'src/scss/variables';
		:scope {
			.repo-entry {
				position: relative;
				margin-bottom: 1em;
			}

			.repo-name {
				@include card(2);
				font-weight: bold;
				font-size: 1.25em;
				color: black;
				background: $colorthree;
				display: inline-block;
				padding: 0 1em;
				border-radius: 7px;

				a,
				a:visited {
					color: inherit;
					cursor: pointer;
					text-decoration: none;
				}
			}

			.repo-description {
				font-style: italic;
				font-size: .75em;
			}
			
			.repo-symbol {
				position: absolute;
				right: 0;
				top: 0;
				color: $colorthree;
			}
		}
	</style>
</works-page>