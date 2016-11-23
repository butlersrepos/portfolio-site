<navigation-link onclick="{ doNavigate }">
	<div id="about-me-nav" data-url="{ url }" class="permanent-nav menu-option js-about-me-nav">{ description }<i class="nav-icons fa fa-{ icon }"></i></div>
	<script>
    this.description = this.opts.description;
    this.url = this.opts.url;
    this.icon = this.opts.icon;
    doNavigate() {
    	console.log('NAV CLIKT: ' + this.url);
    	riot.route(this.url);
    }
  </script>
	<style scoped="scoped">
		@import 'src/scss/_variables.scss';
		:scope {
			cursor: pointer;
			color: $black;
			display: inline-flex;
			justify-content: center;
			align-items: center;
			background: $colorthree;
			border: 0.05em solid #111;
			border-top: none;
			border-bottom: none;
			font-size: 5.5vmin;
			font-weight: bold;
			white-space: nowrap;
			flex-basis: 33.33%;
			&:first-child {
				border-left: none;
			}
			&:last-child {
				border-right: none;
			}
			.nav-icons {
				margin-left: .5rem;
			}
		}
	</style>
</navigation-link>