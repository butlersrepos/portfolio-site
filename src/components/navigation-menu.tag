<navigation-menu>
    <navigation-link description="About Me" url="aboutme" icon="info-circle"></navigation-link>
    <navigation-link description="Resumé" url="resume" icon="file-text"></navigation-link>
    <navigation-link description="Works" url="works" icon="folder-open"></navigation-link>
    
	<script>
		open() {
			this.root.classList.remove('closed');
			this.root.classList.add('open');
		}
	
		close() {
			this.root.classList.remove('open');
			this.root.classList.add('closed');
		}
	</script>
	
	<style scoped="scoped">
        :scope {
			border-bottom: 3vh solid #111;
            width: 92vw;
			height: 75vh;
            position: absolute;
			right: 0;
			bottom: 100%;
			display: none;
			flex-direction: column;
			justify-content: center;
            align-items: stretch;

			&.open {
				display: flex;
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