<navigation-menu class={ isOpen ? 'open' : 'closed' }>
    <navigation-link tabindex="1" description="About Me" url="aboutme" icon="info-circle"></navigation-link>
    <navigation-link tabindex="2" description="Posts" url="http://butlersrepos.github.io" icon="coffee" external=true></navigation-link>
    <navigation-link tabindex="3" description="Resumé" url="resume" icon="file-text"></navigation-link>
    <navigation-link tabindex="4" description="Repos" url="works" icon="folder-open"></navigation-link>
	<navigation-link tabindex="5" description="Experiments" url="experiments" icon="flask"></navigation-link>
    
	<script>
		this.isOpen = store.getState().isMenuOpen

		store.subscribe(() => {
			this.isOpen = store.getState().isMenuOpen
			this.update()
		});
	</script>
	
	<style scoped="scoped">
        $links: 5;

		:scope {
			border-bottom: 3vh solid transparent;
            width: 92vw;
			height: 70vh;
            position: absolute;
			bottom: 100%;
			right: -100vw;
			opacity: 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: stretch;

			navigation-link {
				position: relative;
				opacity: 0;
				right: -100vw;
			}

			&.open {
				opacity: 1;
				right: 0;

				navigation-link {
					opacity: 1;
					right: 0;
				}

				@for $i from 1 through $links {
					navigation-link:nth-child(#{$i}) {
						transition: right .33s ($i * .1s) ease-in, opacity .33s linear;
					}
				}
			}

			@media screen and (max-width: 768px) {
				flex-direction: column-reverse;
				border-bottom: 1vh solid transparent;
			}

			@media screen and (min-width: 1024px) {
				width: 94vw;
			}
        }
    </style>
</navigation-menu>