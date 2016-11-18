employer-entry 
	.resume-date-entry.employer-entry
		.resume-event
			| { title }, 
			a(target='_blank', href="{ link }")
				| { employer }
		.resume-event-date
			| { start } - { end }

	style(scoped).
		:scope {
			display: block;
			margin-bottom: 2rem;
			text-indent: 2rem;
		}