import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('transitions', { path: '/' }, function() {
    this.route('fade');
    this.route('default');
    this.route('index', { path: '/' });
    this.route('cross-fade');
    this.route('to-left');
    this.route('to-down');
    this.route('to-right');
    this.route('to-up');
    this.route('scale');
  });
  this.route('about');
});

export default Router;
