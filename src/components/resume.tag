<resume>
	<header>
		<div class="resume-title-name">{ resume.firstname } { resume.lastname }</div>
		<div class="resume-title-info">
			<div>{ resume.bio_data.location }</div>
			<div>{ resume.bio_data.email }</div>
			<div>{ resume.bio_data.phone }</div>
		</div>
	</header>
	<section>
		<div>
			<h2>EDUCATION</h2>
				<education-entry each="{ resume.bio_data.education.schools }"></education-entry>
			</div>
			<h2>EMPLOYERS</h2>
				<employer-entry each="{ resume.bio_data.experience.positions }"></employer-entry>
			<h2>EXPERIENCE</h2>
				<ul>
					<li>Everything javascript</li>
					<li>Aspiring CSS wizard</li>
					<li>Node enthusiast</li>
					<li>JS build tool connoisseur</li>
					<li>Java capable</li>
					<li>Functional programming admirer</li>
				</ul>
		</div>
	</section>

	<script>this.resume = this.opts;</script>

	<style scoped>
		:scope {
			.resume-title-name {
				font-size: 1.75em;
				line-height: 1.5em;
				vertical-align: middle;
				font-weight: bold;
				font-family: Century Gothic, Gothic, Verdana;
			}

			.resume-title-info {
				text-align: right;
			}
		}
	</style>
</resume>