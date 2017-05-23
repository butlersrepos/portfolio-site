import Actions from '../js/actions/index'

<navigation-link onclick="{ doNavigate }" oninput="{ doNavigate }" data-url="{ url }">
	<label>{ description }</label>
	<i class="nav-icons fa fa-{ icon }"></i>
	
	<script>
		this.description = this.opts.description
		this.url = this.opts.url
		this.icon = this.opts.icon

		doNavigate() {
			this.opts.external ? window.location.href = this.url : route(this.url)
			store.dispatch(Actions.menuToggle(false))
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
			margin-top: 1vh;
			font-weight: bold;
			white-space: nowrap;
			flex: 1 1 auto;
			box-shadow: 5px 4px 6px 0px black;
			font-size: 7vw;

			@media all and (min-width: 480px) {
				font-size: 8vw;
			}

			@media all and (min-width: 1024px) {
				font-size: 6vw;
			}

			label {
				flex-basis: 70%;
			}

			@media all and (min-width: 768px) {
				label,
				.nav-icons {
					font-size: 4vw;
				}
			}

			@media all and (min-width: 1280px) {
				label,
				.nav-icons {
					font-size: 3vw;
				}
			}
		}
	</style>
</navigation-link>