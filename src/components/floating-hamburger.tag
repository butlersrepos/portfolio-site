import Actions from '../js/actions/index'

<floating-hamburger>
	<navigation-menu ref="menu"></navigation-menu>
	<i if={ !isOpen } onclick="{ openMenu }" class="fa fa-bars"></i>
	<i if={ isOpen } onclick="{ closeMenu }" class="fa fa-close"></i>
	
	<script>
		this.isOpen = store.getState().isMenuOpen

		store.subscribe(() => {
			this.isOpen = store.getState().isMenuOpen
			this.update()
		});

		openMenu() { store.dispatch(Actions.menuToggle(true)) }
		closeMenu() { store.dispatch(Actions.menuToggle(false)) }
	</script>

	<style scoped="scoped">
		@import 'src/scss/_variables.scss';
		
		:scope {
			box-shadow: 0px 0px 9px 7px rgb(191, 191, 191), 0px 0px 12px 14px darken($colorthree, 20%);
			width: 12vw;
			height: 12vw;
			position: absolute;
			right: 4vw;
			bottom: 12vh;
			cursor: pointer;
			padding: 1vw;
			background: $colorthree;
			background: $specialBackground;
			border-radius: 40%;
			text-align: center;
			
			&:hover {
				background: green;
			}


			.fa-bars,
			.fa-close {
				font-size: 10vw;
				color: $black;
			}

			@media all and (min-width: 1024px) {
				width: 6vw;
				height: 6vw;
				top: 5vh;
    			right: 5vh;

				navigation-menu {
					top: 6vw;
				}

				.fa-close,
				.fa-bars {
					font-size: 4vw;
				}
			}
		}
	</style>
</floating-hamburger>