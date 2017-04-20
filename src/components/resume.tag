<resume>
	<header>
		<div class="resume-title-name">{ resume.firstname } { resume.lastname }</div>
		<a class="resume-downloader" href="/api/resume" target="_blank">
			<i class="fa fa-download" />
			<label>JSON</label>
		</a>
		
		<div class="resume-title-info">
			<div>{ resume.bio_data.location }</div>
			<div>{ resume.bio_data.email }</div>
			<div>{ resume.bio_data.phone }</div>
		</div>
	</header>
	<section class="resume-body">
		<section>
			<h2>EDUCATION</h2>
			<education-entry each="{ resume.bio_data.education.schools }"></education-entry>
		</section>

		<section>
			<h2>EMPLOYERS</h2>
			<employer-entry each="{ resume.bio_data.experience.positions }"></employer-entry>
		</section>

		<section>
			<h2>THINGS I'VE BEEN CALLED</h2>
			<ul>
				<li>javascript guru</li>
				<li>css guy</li>
				<li>nodejs lover</li>
				<li>frontend guy</li>
				<li>java guy</li>
				<li>tech lead</li>
				<li>problem-solver</li>
				<li>realistic</li>
				<li>straight-forward</li>
			</ul>
		</section>

		<section class="projects">
			<h2>PROJECTS</h2>
			<ul>
				<assignment-entry each="{ resume.bio_data.experience.projects }"></assignment-entry>
			</ul>
		</section>
	</section>

	<script>
		this.resume = this.opts
	</script>

	<style scoped>
		@import './src/scss/variables';

		:scope {
			header {
				--shadow-height: 7px;
				background: #999;
				position: relative;
				box-shadow: 6px var(--shadow-height) 0px black;
				margin-bottom: var(--shadow-height);
				padding: .25rem;

				@media screen and (min-width: 768px) {
					max-width: 90vw;
				}
			}

			.resume-title-name {
				font-size: 1.75em;
				line-height: 1.5em;
				vertical-align: middle;
				font-weight: bold;
				font-family: Times New Roman, serif;
			}

			.resume-downloader {
				position: absolute;
				color: $olive;
			    text-shadow: 1px 1px 1px black;
    			text-decoration: none;
				top: 3px;
				right: 3px;
				display: flex;
				flex-flow: column wrap;
				justify-content: center;
				align-items: center;
				font-size: 5vw;

				@media screen and (min-width: 768px) {
					font-size: 35px;
				}

				label {
					font-size: .35em;
				}
			}

			.resume-title-info {
				display: flex;
				flex-flow: row nowrap;
				justify-content: space-around;
				font-family: consolas;

				& > * {
					font-size: 3vw;

					@media screen and (min-width: 1024px) {
						font-size: 30px;
					}
				}
			}

			.resume-body {
				display: flex;
				flex-flow: row wrap;
			    justify-content: flex-start;
    			align-items: flex-start;

				section {
					width: 100%;

					@media screen and (min-width: 768px) {
						width: 50%;
					}

					@media screen and (min-width: 1024px) {
						width: 33%;
					}
				}

				.projects { width: 100%; }

				h2 {
					margin: 0;
				}
			}
		}
	</style>
</resume>