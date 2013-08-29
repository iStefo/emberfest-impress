import Slide from '../models/slide';

var EditorRoute = Ember.Route.extend({
  model: function() {
    
    return [Slide.create(),Slide.create()];
  }
});

export default EditorRoute;
