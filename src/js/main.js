import 'babel-polyfill'
import 'whatwg-fetch';

import riot from 'riot';
window.riot = riot;
import route from 'riot-route';
window.route = route;
import moment from 'moment';
window.moment = moment;

import ga from './google-analytics';
import '../components/navigation-menu.tag';
import '../components/navigation-link.tag';
import '../components/about-me.tag';
import '../components/resume.tag';
import '../components/experiments-page.tag';
import '../components/experiment-entry.tag';
import '../components/education-entry.tag';
import '../components/employer-entry.tag';
import '../components/assignment-entry.tag';
import '../components/works-page.tag';
import '../components/github-repo.tag';
import '../components/bitbucket-repo.tag';
import '../components/floating-hamburger.tag';

import '../components/restaurant-page/restaurant-page.tag';
import '../components/restaurant-page/hours.tag';

import { createStore } from 'redux';
import reducerUltimus from './reducers/the-reducer';
import '../scss/main.scss';
import setupRouter from './router';

window.onload = function () {
	window.store = createStore(reducerUltimus);

	ga.init();
	riot.mount('*');

	setupRouter();
};



