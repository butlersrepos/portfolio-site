<resume>
	<header id="resume-title">
		<div id="resume-title-name">{ resume.firstname } { resume.lastname }</div>
		<div id="resume-title-info">
			<div class="address-line">{ resume.bio_data.location }</div>
			<div class="address-line">{ resume.bio_data.email }</div>
			<div class="address-line">{ resume.bio_data.phone }</div>
		</div>
	</header>
	<section id="resume-body">
		<div id="resume-body-left">
			<div class="resume-header">EDUCATION
				<education-entry each="{ resume.bio_data.education.schools }"></education-entry>
			</div>
			<div id="experience-title" class="resume-header">EXPERIENCE</div>
			<div id="employers">
				<employer-entry each="{ resume.bio_data.experience.positions }"></employer-entry>
			</div>
		</div>
	</section>

	<script>this.resume = this.opts;</script>

	<style scoped>
		:scope {
			#resume-title-name {
				font-size: 1.75em;
				line-height: 1.5em;
				vertical-align: middle;
				font-weight: bold;
				font-family: Century Gothic, Gothic, Verdana;
			}

			#resume-title-info {
				text-align: right;

				.address-line {
					font-weight: bold;
				}
			}

			.resume-header {
				font-family: Century Gothic, Gothic, Verdana;
				font-weight: bold;
				margin-top: 1em;
			}
		}
	</style>
</resume>