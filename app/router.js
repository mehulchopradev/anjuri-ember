import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('calculator', { path: '/calc'});
  this.route('todos');
  this.route('library', function() {
    this.route('index');
    this.route('detail', { path: 'details/:book_id'});
  });
});

export default Router;
