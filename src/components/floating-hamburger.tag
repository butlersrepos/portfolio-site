<floating-hamburger>
	<navigation-menu ref="menu"></navigation-menu>
	<i if={ !open } onclick="{ openMenu }" class="fa fa-bars"></i>
	<i if={ open } onclick="{ openMenu }" class="fa fa-close"></i>
	
	<script>
		this.open = false;

		openMenu() {
			this.open = !this.open;
			this.open ? this.refs.menu.open() : this.refs.menu.close();
		}
	</script>

	<style scoped="scoped">
		@import 'src/scss/_variables.scss';
		
		:scope {
			@include card(2);
			width: 12vw;
			height: 12vw;
			position: absolute;
			right: 4vw;
			bottom: 12vh;
			padding: 1vw;
			background: $colorthree;
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