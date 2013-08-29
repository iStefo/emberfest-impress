import Slide from '../models/slide';

var EditorRoute = Ember.Route.extend({
  model: function() {
    return [
      Slide.create({x: 200, y: 100}),
      Slide.create()
    ];
  }
});

export default EditorRoute;
