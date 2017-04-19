<navigation-menu class={ isOpen ? 'open' : 'closed' }>
    <navigation-link description="About Me" url="aboutme" icon="info-circle"></navigation-link>
    <navigation-link description="Posts" url="http://butlersrepos.github.io" icon="coffee" external=true></navigation-link>
    <navigation-link description="Resumé" url="resume" icon="file-text"></navigation-link>
    <navigation-link description="Repos" url="works" icon="folder-open"></navigation-link>
	<navigation-link description="Experiments" url="experiments" icon="flask"></navigation-link>
    
	<script>
		this.isOpen = store.getState().isMenuOpen

		store.subscribe(() => {
			this.isOpen = store.getState().isMenuOpen
			this.update()
		});
	</script>
	
	<style scoped="scoped">
        :scope {
			border-bottom: 3vh solid transparent;
            width: 92vw;
			height: 75vh;
            position: absolute;
			bottom: 100%;
			right: -100vw;
			transition: right .33s ease-in, opacity .33s linear;
			opacity: 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: stretch;

			&.open {
				opacity: 1;
				right: 0;
			}


			@media screen and (max-width: 768px) {
				flex-direction: column-reverse;
			}

			@media screen and (min-width: 1024px) {
				width: 94vw;
			}
        }
    </style>
</navigation-menu>