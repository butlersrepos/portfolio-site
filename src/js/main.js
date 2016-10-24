import HistoryNavigation from './history-navigation';
import NavBar from './nav-bar';
import $ from 'jquery';
window.$ = $;
import _ from 'lodash';
window._ = _;
import riot from 'riot';
window.riot = riot;

import '../components/navigation-bar.tag';
import '../components/navigation-link.tag';

$(document).ready(function() {
  NavBar.bindNavbarButtons();
  NavBar.setupGoogleAnalytics();
  HistoryNavigation.init();

  riot.mount('*');
});



