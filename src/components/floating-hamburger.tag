<floating-hamburger><i onclick="{ openMenu }" class="fa fa-bars"></i>
	<script>
    openMenu() {
    	console.log('opening hamburger')
    }
  </script>
	<style scoped="scoped">
		@import 'src/scss/_variables.scss';
		
		:scope {
			width: 12vw;
			height: 12vw;
			position: absolute;
			right: 2vh;
			bottom: 12vh;
			padding: 1vw;
			background: $colorthree;
			border-radius: 40%;
			text-align: center;
			i.fa-bars {
				font-size: 10vw;
			}
			@media all and (min-width: 1024px) {
				width: 6vw;
				height: 6vw;
				i.fa-bars {
					font-size: 4vw;
				}
			}
		}
	</style>
</floating-hamburger>