repo-report.row
	h1
	| { title }
	.repo-entry(each="{ repos }")
		.repo-name
			a(href="{ html_url || links.html.href }")
			| { name }
		.repo-date
			span.repo-date-label Last Update:
			| { moment( updated_at || updated_on, updated_at ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD HH:mm:ss. Z" ).format( "MMM Do, YYYY" ) }
		.repo-description
			| { description }
	script.
		this.repos = opts.repos;
