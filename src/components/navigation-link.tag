<navigation-link onclick="{ doNavigate }" data-url="{ url }">
	<label>{ description }</label>
	<i class="nav-icons fa fa-{ icon }"></i>
	
	<script>
		this.description = this.opts.description;
		this.url = this.opts.url;
		this.icon = this.opts.icon;

		doNavigate() {
			route(this.url);
			
		}
	</script>
	<style scoped="scoped">
		@import 'src/scss/_variables.scss';

		:scope {
			cursor: pointer;
			color: $black;
			display: flex;
			align-items: center;
			background: $colorthree;
			border-top: 1vh solid $black;
			font-size: 10vw;
			font-weight: bold;
			white-space: nowrap;
			flex: 1 1 auto;

			@media all and (min-width: 1024px) {
				font-size: 6vw;
			}

			label {
				flex-basis: 70%;
			}

			.nav-icons {}
		}
	</style>
</navigation-link>