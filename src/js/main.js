import HistoryNavigation from './history-navigation';
import NavBar from './nav-bar';
import $ from 'jquery';
import _ from 'lodash';
window.$ = $;
window._ = _;

$(document).ready(function() {
  NavBar.bindNavbarButtons();
  NavBar.setupGoogleAnalytics();
  HistoryNavigation.init();
});



