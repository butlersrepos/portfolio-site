<github-repo>
	<h1>{ title }</h1>
	<div each="{ repos }" class="repo-entry">
		<div class="repo-name">
			<a href="{ html_url }">{ name }</a>
		</div>
		<div class="repo-date">
			<span class="repo-date-label">Last Update:</span>
			{ moment( updated_at, "YYYY-MM-DD HH:mm:ss").format( "MMM Do, YYYY" ) }
		</div>
		<div class="repo-description">{ description }</div>
		<i class="repo-symbol fa fa-github fa-3x"/>
	</div>

	<script>
		this.repos = this.opts.repos;

		this.on('update', function() {
			this.repos = this.opts.repos;
		});
	</script>

	<style scoped>
		:scope {
			
		}
	</style>
</github-repo>