<assignment-entry>
	<div class="resume-date-entry">
		<div class="resume-event">'Client: '<a target="_blank" href="{ client_link }">{ client }</a>, { location }</div>
		<div class="resume-event-date">{ start } - { end}</div>
		<div class="resume-paragraph">{ description }</div>
	</div>

	<style scoped>
		@import "./src/scss/variables";
		:scope {
			margin-bottom: 2rem;
			
			.resume-event {
				font-weight: bold;
				a {
					text-decoration: none;
					color: $linkColor;
					&:visited {
						color: $linkColor;
					}
				}
			}

			.resume-event-date {
				font-style: italic;
			}

			.resume-paragraph {
				text-indent: 2em;
			}
		}
	</style>
</assignment-entry>