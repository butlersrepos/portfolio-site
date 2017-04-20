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
			right: 0;
			bottom: 12vh;
			padding: 1vw;
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

			@media all and (min-width: 768px) {
				width: 60px;
				height: 60px;
				top: 1rem;
    			right: 0;

				navigation-menu {
					top: calc(1rem + 60px);
				}

				.fa-close,
				.fa-bars {
					font-size: 42px;
				}
			}
		}
	</style>
</floating-hamburger>