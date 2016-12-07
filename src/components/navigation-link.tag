<navigation-link onclick="{ doNavigate }">
	<div id="about-me-nav" data-url="{ url }" class="permanent-nav menu-option js-about-me-nav">{ description }<i class="nav-icons fa fa-{ icon }"></i></div>
	
	<script>
		this.description = this.opts.description;
		this.url = this.opts.url;
		this.icon = this.opts.icon;

		doNavigate() {
			riot.route(this.url);
		}
	</script>
	<style scoped="scoped">
		@import 'src/scss/_variables.scss';

		:scope {
			cursor: pointer;
			color: $black;
			display: flex;
			justify-content: center;
			align-items: center;
			background: $colorthree;
			border-top: 1vh solid $black;
			font-size: 5.5vmin;
			font-weight: bold;
			white-space: nowrap;
			flex: 1 1 auto;

			&:hover {
				

			}

			.nav-icons {
				margin-left: .5rem;
			}
		}
	</style>
</navigation-link>