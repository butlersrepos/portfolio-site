/**
	These are mapped the the routes object in mainServer.js
	This is the eqivalent of a Controller class in a typical Spring-Java setup.
**/

// Moment plugin for time and date parsing
var moment = require('moment');
// MySQL connection setup
//var mysql = require('mysql');
//var connection = mysql.createConnection('mysql://ebiUser:bung2020@54.243.177.112/PORTFOLIO_SITE?reconnect=true');
//connection.connect();

var resumeJson = {
	'firstname': 'Eric',
	'lastname': 'Butler',
	'linkedin_id': 'ericmbutler',
	'bio_data': {
		'email': 'ericbutler00@gmail.com',
		'phone': '(419) 366-9274',
		'website': 'ericbutler.info',
		'skills': {
			'languages': [
				'Java 1.5+',
				'Javascript'
			],
			'web technologies': [
				'HTML5 & CSS3',
				'JQuery',
				'LESS & SASS'
			],
			'frameworks': [
				'Spring 2.5+',
				'NodeJS'
			],
			'versioning': [
				'Git',
				'SVN'
			],
			'IDEs': [
				'Eclipse',
				'IntelliJ'
			],
			'servers': [
				'Tomcat',
				'JBoss'
			],
			'OSes': [
				'Windows',
				'Linux'
			],
			'methodologies': [
				'Agile'
			]
		},
		'hobbies': [
			'D&D',
			'M:tg',
			'PC Games',
			'Weight-Lifting',
			'shitty Electronic music',
			'Web dev'
		],
		'education': {
			'schools': [
				{
					'degree': 'Master of Arts',
					'major': 'Economics',
					'institution': 'Bowling Green State University',
					'graduation_year': 2009
				},
				{
					'degree': 'Bachelor of Arts',
					'major': 'Philosophy & Economics',
					'institution': 'Bowling Green State University',
					'graduation_year': 2007
				}
			]
		},
		'experience': {
			'positions': [
				{
					'title': 'Solutions Architect',
					'employer': 'Leading EDJE',
					'start': 'July 2013',
					'end': 'Present'
				},
				{
					'title': 'Senior Consultant',
					'employer': 'Sogeti USA',
					'start': 'February 2011',
					'end': 'June 2013'
				}
			],
			'projects': [
				{
					'client': 'DSW',
					'client_link': 'http://ww.dsw.com',
					'location': 'Columbus, OH',
					'start': 'April 2014',
					'end': 'Present',
					'project': 'Ecommerce Frontend Team',
					'description': 'This project involved Git, Java, ATG 9.4, ATG 11, Endeca, Bamboo, Eclipse, IntelliJ, some batch scripting, and a multitude of other pieces as I helped move them into an upgraded environment and redesign of their entire retail website. This team was also fairly new to Agile and sought advice in that respect. I also helped establish coding standards, spread git usage knowledge to many first-time users, and setup design patterns for Spring MVC and frontend code.'
				},
				{
					'client': 'Crown Equipment',
					'client_link': 'http://www.crown.com/usa/index.html',
					'location': 'New Bremen, OH',
					'start': 'July 2013',
					'end': 'April 2014',
					'project': 'Module Simulation',
					'description': 'Along with a change in employer this project took me in a fresh direction from my status quo forcing me to acquire more knowledge of low-level operations in a Java environment, AWS Cloud management, and network communications. This project also used Agile methodology in a remote team setting.'
				},
				{
					'client': 'Nationwide',
					'client_link': 'http://www.nationwide.com/investments-and-retirement.jsp',
					'location': 'Columbus, OH',
					'start': 'February 2013',
					'end': 'June 2013',
					'project': 'Investments Team App Support',
					'description': 'My involvement in this project was a support nature but required me to familiarize myself with numerous web apps that the team already supported across various platforms. I became acclimated to debugging and improving processes in C#, Informatica, SQL, and Maestro as well as my wheelhouse Java. This team was deeply invested in the Agile methodology.'
				},
				{
					'client': 'Safelite',
					'client_link': 'http://www.safelite.com/',
					'location': 'Columbus, OH',
					'start': 'July 2012',
					'end': 'January 2013',
					'project': 'Service Auto Glass',
					'description': 'This project was a complete overhaul of the wholesalers\' sales interface to Service Auto Glass. I had also spear-headed the entire mobilization of the web site; demoing a proof of concept and determining the architecture and technologies used. This project was built on Spring 3.0, jQuery 1.7, Maven 3, and Tomcat 7.'
				},
				{
					'client': 'Abercrombie & Fitch',
					'client_link': 'http://www.abercrombie.com/shop/us',
					'location': 'Columbus, OH',
					'start': 'April 2012',
					'end': 'June 2012',
					'project': 'Outbound WMS',
					'description': 'This was about adding new functionality and improving old functionality on the Warehouse Management Systems. The project involved significant Java work within a Struts and Spring framework and overhauling older design pattern for newer ones friendly to jQuery, CSS3, HTML5, and future Spring integrations. Other tools used: Apache Tomcat, Weblogic, and AJAX.'
				},
				{
					'client': 'Abercrombie & Fitch',
					'client_link': 'http://www.abercrombie.com/shop/us',
					'location': 'Columbus, OH',
					'start': 'January 2012',
					'end': 'April 2012',
					'project': 'Visual Merchandising Systems',
					'description': 'This project encompassed an extensive frontend goal which involved thousands of lines of customized javascript and rewritten jQuery extensions. I was specifically requested on this team after my exposure to their apps while on Store Systems. Technologies consisted of Java, Struts, javascript, jQuery, HTML, CSS3, Jahia, Maven, and AJAX.'
				},
				{
					'client': 'Abercrombie & Fitch',
					'client_link': 'http://www.abercrombie.com/shop/us',
					'location': 'Columbus, OH',
					'start': 'October 2011',
					'end': 'January 2012',
					'project': 'Global Trade Database',
					'description': 'I was placed onto this team to speed up development of a project behind schedule. Utilized GWT, Java, WebLogic, AJAX, and Oracle SQL. Significant overtime was necessary to finish on schedule. I learned valuable lessons such as; don\'t use GWT.'
				},
				{
					'client': 'Abercrombie & Fitch',
					'client_link': 'http://www.abercrombie.com/shop/us',
					'location': 'Columbus, OH',
					'start': 'May 2011',
					'end': 'October 2011',
					'project': 'Store Systems',
					'description': 'I contributed development to store contracts systems and interfaces. I owned the design and development of a java web-app, with spare time from main projects. Technologies involved full back to front development: Java backend, Spring 3.0, Maven, Apache Tomcat, CSS, HTML, jQuery, AJAX, javascript, and Oracle SQL.'
				},
				{
					'client': 'Abercrombie & Fitch',
					'client_link': 'http://www.abercrombie.com/shop/us',
					'location': 'Columbus, OH',
					'start': 'March 2011',
					'end': 'May 2011',
					'project': 'Ecommerce Frontend',
					'description': 'Here I updated and maintained the primary commercial websites of Abercrombie & Fitch, Abercrombie kids, Hollister, and Gilly Hicks. Tasks utilized CSS 3, HTML, JSPs, SVN, Apache Tomcat, and WebSphere. I also implemented a Java based automation of repetitive content management tasks.'
				}
			]
		}
	}
};

/* Main Start Page */
exports.home = function(req, res) {
	console.log('Starting!');
	res.render('home.ejs');
	console.log(req.host)
};

/* A Short AJAXed Autobiography */
exports.aboutMe = function(req, res) {
	console.log('Loading AboutMe...');
	res.render('content/aboutMe.ejs');
};

/* An AJAXed Resume */
exports.resume = function(req, res) {
	console.log('Loading Resume...');
	res.render('content/resume.ejs');
};

/** RESTful API Stuff */
exports.resumeGet = function(req, res) {
	res.writeHead(200, {"Content-Type": "application/json"});
	res.end( JSON.stringify(resumeJson) );
};

