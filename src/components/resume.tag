resume
	header#resume-title
		#resume-title-name
			| { resume.firstname } { resume.lastname }
		#resume-title-info
			.address-line
				| { resume.bio_data.location }
			.address-line
				| { resume.bio_data.email }
			.address-line
				| { resume.bio_data.phone }
	section#resume-body
		#resume-body-left
			.resume-header EDUCATION
				education-entry(each="{ resume.bio_data.education.schools }")
			#experience-title.resume-header EXPERIENCE
			#employers
				employer-entry(each="{ resume.bio_data.experience.positions }")

	script.
		this.resume = this.opts;
