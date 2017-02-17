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
		@import 'src/scss/variables.scss';
		
		:scope {
			width: 12vw;
			height: 12vw;
			position: absolute;
			right: 4vw;
			bottom: 12vh;
			padding: 1vw;
			border-radius: 40%;
			text-align: center;
			transition: background .5s ease-in, box-shadow .1s ease-in;
			background: $colorthree;
			box-shadow: 0px 6px 1px 0px darkgreen;

			&:active {
				box-shadow: 0px 2px 0px 0px darkgreen;
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