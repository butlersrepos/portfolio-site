
import ga from './google-analytics';
import $ from 'jquery';
window.$ = $;
import _ from 'lodash';
window._ = _;
import riot from 'riot';
window.riot = riot;

import '../components/navigation-bar.tag';
import '../components/navigation-link.tag';
import '../components/about-me.tag';
import '../components/resume.tag';
import '../components/education-entry.tag';
import '../components/employer-entry.tag';
import '../components/assignment-entry.tag';
import '../components/works-page.tag';
import '../components/github-repo.tag';
import '../components/bitbucket-repo.tag';
import '../components/floating-hamburger.tag';

$(document).ready(function() {
  ga.init();
  riot.mount('*');
});



