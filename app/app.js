import Resolver from 'resolver';

var App = Ember.Application.create({
  LOG_ACTIVE_GENERATION: true,
  LOG_VIEW_LOOKUPS: true,
  modulePrefix: 'emberfest-impress', // TODO: loaded via config
  Resolver: Resolver
});

import routes from 'emberfest-impress/routes';

App.Router.reopen({
  location: 'history'
});

App.Router.map(routes); // TODO: just resolve the router

export default App;












