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
</resume>